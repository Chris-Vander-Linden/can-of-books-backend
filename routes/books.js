const express = require('express');
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
router.get('/:title', (req, res) => {
  BookCollection.find({ title: req.params.title }, (err, book) => {
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
// router.patch('/', (req, res) => {});

// Delete one
// router.delete('/:title', (req, res) => {});

module.exports = router;
