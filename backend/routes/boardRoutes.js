// backend/routes/boardRoutes.js
const express = require('express');
const Board = require('../models/Board');
const router = express.Router();

// Route to add a new board
router.post('/add', async (req, res) => {
  const { name } = req.body;

  try {
    const newBoard = new Board({ name });
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create board' });
  }
});

// Route to get all boards
router.get('/', async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch boards' });
  }
});

module.exports = router;
