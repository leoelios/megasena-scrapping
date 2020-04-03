// Globals configurations
require('./config/database');

const { getData, getLastDraw } = require('./utils');
const { show, getMinorAndBigger } = require('./utils/manipulation');

(async () => {
  // const LastDrawNumber = await getLastDraw();
  // await getData(LastDrawNumber);
  const countedNumbers = await show(1);
  const minorAndBigger = getMinorAndBigger(countedNumbers);
  console.log(minorAndBigger);
})();
