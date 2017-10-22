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

// Set Routes
const pages = require('./routes/pages.js');
app.use('/pages', pages);

app.listen(port, function() {
  console.log(`server running ${port}`);
})
