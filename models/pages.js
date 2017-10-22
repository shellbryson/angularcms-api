const mongoose = require('mongoose');

// Schema
const PageSchema = mongoose.Schema({
  title: {
    type: String
  },
  slug: {
    type: String
  },
  content: {
    type: String
  },
  sidebar: {
    type: String
  }
});
