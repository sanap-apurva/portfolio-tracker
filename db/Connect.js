// Connect.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/portfolio-tracking-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
