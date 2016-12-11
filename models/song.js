'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = new Schema({
  title: String,
  artist: String,
  lyrics: String
});

module.exports = mongoose.model('Song', Song);
