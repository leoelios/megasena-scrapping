// Globals configurations
require('./config/database');

const { getData, getLastDraw } = require('./utils');

(async () => {
  const LastDrawNumber = await getLastDraw();
  await getData(LastDrawNumber);
})();
