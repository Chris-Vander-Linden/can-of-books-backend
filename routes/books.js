const express = require('express');
// https://expressjs.com/en/guide/routing.html
const router = express.Router();
const BookCollection = require('../models/books.js');

// Get all
router.get('/', (req, res) => {
  BookCollection.find({}, (err, book) => {
    if (err) res.status(500).send(err);
    res.status(200).send(book);
  });
});

// Get one
router.get('/:id', (req, res) => {
  BookCollection.find({ _id: req.params.id }, (err, book) => {
    // server error
    if (err) res.status(500).send(err);
    // response okay
    res.status(200).send(book);
  });
});

// Create one
router.post('/', (req, res) => {
  BookCollection.create(
    {
      title: req.body.title,
      author: req.body.author,
      image: req.body.image,
      description: req.body.description,
      status: req.body.status
    }
    , (err, book) => {
      // 400 user error
      if (err) res.status(400).send(err);
      // 201 successfully added
      res.status(201).send(book);
    });
});


// Update one (update part)
router.put('/:id', (req, res) => {
  console.log(req);
  BookCollection.updateOne(
    { _id: req.params.id },
    {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      status: req.body.status
    }
    , (err, book) => {
      // server error
      if (err) res.status(500).send(err);
      // response okay
      res.status(200).send(book);
    });
});

// Delete one
router.delete('/:id', (req, res) => {
  BookCollection.deleteOne({ _id: req.params.id }, (err, book) => {
    // server error
    if (err) res.status(500).send(err);
    // response okay
    res.status(200).send(book);
  });
});

module.exports = router;
