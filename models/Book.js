const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  publishedYear: {
    type: Number,
    required: [true, 'Published year is required']
  },
  genre: {
    type: String,
    default: 'Uncategorized'
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);