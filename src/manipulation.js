const Draw = require('./models/Draw');

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
  show: async () => {
    Draw.count()
      .then((count) => {
        console.log(count);
      })
      .catch(() => {
        console.log('error on count all data');
      });
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
