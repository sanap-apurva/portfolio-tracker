// models/tradeModel.js

const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  date: Date,
  price: Number,
  type: { type: String, enum: ['BUY', 'SELL'] },
  stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }
});

module.exports = mongoose.model('Trade', TradeSchema);
