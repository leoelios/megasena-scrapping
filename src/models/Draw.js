const mongoose = require('mongoose');

const { Schema } = mongoose;
const drawSchema = new Schema({
  id: Number,
  dateDraw: String,
  result: [Number],
});

module.exports = mongoose.model('Draws', drawSchema);
