const express = require('express');
const List = require('../models/List');
const router = express.Router();

// Route to add a new list
router.post('/add', async (req, res) => {
  const { boardId, title } = req.body;

  if (!boardId || !title) {
    return res.status(400).json({ error: 'Board ID and Title are required' });
  }

  try {
    const newList = new List({ boardId, title });
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    console.error('Error creating new list:', err); // Log the error for debugging
    res.status(500).json({ error: 'Failed to create list' });
  }
});

// Route to get all lists by board ID
router.get('/', async (req, res) => {
  const { boardId } = req.query;

  try {
    const lists = await List.find({ boardId }).populate('cards');
    res.status(200).json(lists);
  } catch (err) {
    console.error('Error fetching lists:', err); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch lists' });
  }
});

module.exports = router;
