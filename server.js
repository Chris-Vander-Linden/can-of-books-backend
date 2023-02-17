'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5005;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGOURL);

// Bring in our endpoint routes
const booksRouter = require('./routes/books.js');
const homeRouteResponse = require('./routes/home.js');
const searchBooks = require('./routes/searchBooks.js');
const noFoundResponse = require('./routes/home.js');

// create server.
const app = express();
// We probably won't use cors.
app.use(cors());
// Allows our server to accept JSON in the body.
app.use(express.json());

// db connection.
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

/*** ROUTES ***/
app.get('/', homeRouteResponse);
app.get('/searchBooks', searchBooks);
app.use('/books', booksRouter);
app.get('*', noFoundResponse);

/*** ERROR ***/
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
