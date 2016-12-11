'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Song = require('../models/song');

router.get('/', (req, res) => {
  Song.find( (err, songs) => {
    res.json(songs);
  });
});

router.post('/', (req, res) => {
  let { title, artist, lyrics } = req.body;
  new Song({
    title,
    artist,
    lyrics
  }).save( (err, song) => {
    res.json(song);
  });
});

router.get('/:id', (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    res.json(song);
  });
});

module.exports = router;
