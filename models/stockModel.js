// models/stockModel.js

const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  id: String
});

module.exports = mongoose.model('Stock', StockSchema);
