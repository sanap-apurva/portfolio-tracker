const Portfolio = require('../models/portfolioModel');
const Trade = require('../models/tradeModel');

// Get entire portfolio with trades
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().populate('trades');
    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get holdings in an aggregate view
exports.getHoldings = async (req, res) => {
  try {
    // Implement logic to calculate holdings and aggregate view
    // For example:
    const portfolio = await Portfolio.findOne().populate('trades');
    // Calculate holdings and return
    res.json({ success: true, data: holdings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get cumulative returns
exports.getCumulativeReturns = async (req, res) => {
  try {
    // Implement logic to calculate cumulative returns
    // For example:
    const initialPrice = 100; // Placeholder initial price
    const finalPrice = 200; // Placeholder final price
    const cumulativeReturn = (finalPrice - initialPrice) / initialPrice * 100;
    res.json({ success: true, data: { cumulativeReturn } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Add a new trade to the portfolio
exports.addTrade = async (req, res) => {
  const { date, price, type, stockId } = req.body;

  try {
    const trade = new Trade({ date, price, type, stock: stockId });
    await trade.save();

    const portfolio = await Portfolio.findOne();
    portfolio.trades.push(trade._id);
    await portfolio.save();

    res.json({ success: true, data: trade });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update an existing trade in the portfolio
exports.updateTrade = async (req, res) => {
  const { id } = req.params;
  const { date, price, type, stockId } = req.body;

  try {
    const trade = await Trade.findByIdAndUpdate(id, { date, price, type, stock: stockId }, { new: true });
    res.json({ success: true, data: trade });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete a trade from the portfolio
exports.deleteTrade = async (req, res) => {
  const { id } = req.params;

  try {
    await Trade.findByIdAndDelete(id);

    const portfolio = await Portfolio.findOne();
    portfolio.trades = portfolio.trades.filter(tradeId => tradeId.toString() !== id);
    await portfolio.save();

    res.json({ success: true, message: 'Trade deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
