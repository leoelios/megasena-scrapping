const mongoose = require('mongoose');
require('dotenv/config');

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@brasil-pepfz.gcp.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Database is connected');
  })
  .catch((errorConnection) => {
    console.log(`Error on connect in database: \n${errorConnection}`);
  });
