const express = require('express');
const router = express.Router();

const config = require('config');
const Url = require('../models/Url');

router.post('/shortenUrl', async (req, res) => {

  try {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');
    let url = await Url.findOne({ longUrl });
    
    if (url) {
      res.status(200).json(url);
    } else {
      const shortUrl = baseUrl + '/' + Math.random().toString(36).slice(2);

      url = new Url({
        longUrl,
        shortUrl,
      });

      await url.save();

      res.status(200).json(url);
    }
  } catch (err) {
    res.status(500).json('An error have occured on the server');
  }

});

module.exports = router;