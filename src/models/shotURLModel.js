const mongoose = require('mongoose');

const shortURLSchema = new mongoose.Schema({
  full: String,
  short: String,
});

const ShortURL = mongoose.model('ShortURL', shortURLSchema);

module.exports = ShortURL;
