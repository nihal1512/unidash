// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const watchlistRoutes = require('./routes/Watchlist');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the URL of your frontend if different
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], // Allow PATCH method
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
const port = 5000;
const mongoURI = 'mongodb+srv://harshtripathi042:harsh123@cluster0.etqbz6r.mongodb.net/unidash';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/api/v1/watchlist', watchlistRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
