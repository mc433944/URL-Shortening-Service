const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Url',
  new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
  }
  ));