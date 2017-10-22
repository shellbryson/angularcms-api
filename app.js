const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');

// Connect to DB
mongoose.connect(config.database);
const db = mongoose.connection;

// Made database connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB');
})

// Init app
const app = express();
const port = 3000;

app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: false}) );
app.use(bodyParser.json());
app.listen(port, function() {
  console.log(`server running ${port}`);
})
