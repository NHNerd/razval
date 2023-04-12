const mongoose = require('mongoose');

const itemScheme = new mongoose.Schema({
  imgSrc: {
    type: String,
  },
  name: {
    type: String,
    require: true, //? field to must have a value before a document can be saved to the database
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  size: {
    type: String,
  },
});

module.exports = mongoose.model('items', itemScheme);
