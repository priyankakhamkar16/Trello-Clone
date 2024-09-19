const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Add a new card
router.post('/add', async (req, res) => {
  const { listId, title } = req.body;
  const newCard = new Card({ title, listId });

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(500).json({ message: 'Error adding card' });
  }
});

// Fetch cards for a specific list
router.get('/', async (req, res) => {
  const { listId } = req.query;
  try {
    const cards = await Card.find({ listId });
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cards' });
  }
});

module.exports = router;
