const express = require('express');
const router = express.Router();

// get page model

const Page = require('../models/pages');

/*
 * Get all pages
 */

router.get('/', function(req, res) {
  Page.find({}, function(err, pages) {
    if (err) console.log(err);
    res.json(pages);
  });
});

// exports
module.exports = router;
