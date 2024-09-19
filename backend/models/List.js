const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('List', listSchema);
