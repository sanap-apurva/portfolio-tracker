const express = require('express');
const router = express.Router();
const portfolioController = require('../controller/portfolioController');

// Fetch entire portfolio with trades
router.get('/', portfolioController.getPortfolio);

// Get holdings in an aggregate view
router.get('/holdings', portfolioController.getHoldings);

// Get cumulative returns
router.get('/returns', portfolioController.getCumulativeReturns);

// Add a new trade to the portfolio
router.post('/addTrade', portfolioController.addTrade);

// Update an existing trade in the portfolio
router.put('/updateTrade/:id', portfolioController.updateTrade);

// Delete a trade from the portfolio
router.delete('/deleteTrade/:id', portfolioController.deleteTrade);

module.exports = router;
