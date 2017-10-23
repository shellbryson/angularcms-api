const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let config = require('./config/database');

// Connect to DB
mongoose.connection.openUri(config.database)
  .once('open', () => console.log('Good to go !'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

const db = mongoose.connection;

// Init app
const app = express();
const port = 3000;

app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: false}) );
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentuals', true);
  next();
})

// Set Routes
const pages = require('./routes/pages.js');
app.use('/pages', pages);

app.listen(port, function() {
  console.log(`server running ${port}`);
})
