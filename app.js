// app.js

const express = require('express');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolioRoutes');
const db = require('./db/Connect');

const app = express();

app.use(bodyParser.json());

app.use('/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
