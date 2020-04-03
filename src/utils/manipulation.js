const Draw = require('../models/Draw');

let x = 1;
let countedNumbers = [];

const show = async (numberTarget) => {
  if (x <= 60) {
    await Draw.countDocuments({
      result: {
        $all: [numberTarget],
      },
    })
      .then(async (count) => {
        countedNumbers.push(count);
        x = x + 1;
        await show(x);
      })
      .catch((err) => {
        console.log('error on count quantity numbers seted');
        console.log(err);
      });
  }
  return countedNumbers;
};

module.exports = {
  save: async (competitionResult) => {
    Draw.create(competitionResult, async (errorSaveDraw, saved) => {
      if (errorSaveDraw) {
        console.log(errorSaveDraw);
      }
      if (saved) {
        console.log(saved);
      }
    });
  },
  show,
  getMinorAndBigger: (countedNumbers) => {
    x = 1;

    let minor = countedNumbers[0];
    let bigger = countedNumbers[0];
    let positionMinor = 0;
    let positionBigger = 0;

    do {
      if (countedNumbers[x] < minor) {
        minor = countedNumbers[x];
        positionMinor = x;
      } else if (countedNumbers[x] > bigger) {
        bigger = countedNumbers[x];
        positionBigger = x;
      }
      x = x + 1;
    } while (x < 60);
    return {
      minor: {
        number: positionMinor,
        currencly: minor,
      },
      bigger: {
        number: positionBigger,
        currencly: bigger,
      },
    };
  },
  deleteAll: async () => {
    Draw.deleteMany()
      .then((deletedDraws) => {
        console.log('deletados!');
        console.log(deletedDraws);
      })
      .catch(() => {
        console.log('error on delete all Draws');
      });
  },
};
