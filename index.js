const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const Book = require('./models/Book');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Digital Bookshelf API is running!');
});

// GET all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new book
app.post('/api/books', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});