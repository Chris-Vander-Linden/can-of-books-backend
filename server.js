'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGOURL);

const app = express();
// We probably won't use cors.
app.use(cors());
// Allows our server to accept JSON in the body
app.use(express.json());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});



/*** ROUTES ***/
app.get('/', (request, response) => {
  response.send('Home');
});

// Bring in our endpoint routes
const booksRouter = require('./routes/books.js');
app.use('/books', booksRouter);

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});




/*** ERROR ***/
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
