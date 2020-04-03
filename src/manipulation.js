const Draw = require('./models/Draw');

let x = 1;

const show = async (numberTarget) => {
  if (x <= 60) {
    await Draw.countDocuments({
      result: {
        $all: [numberTarget],
      },
    })
      .then(async (count) => {
        console.log(count);
        x = x + 1;
        await show(x);
      })
      .catch((err) => {
        console.log('error on count quantity numbers seted');
        console.log(err);
      });
  }
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
