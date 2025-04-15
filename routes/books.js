const express = require(`express`);
const router = express.Router();

const books = require(`../data/books`);

router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = {
    id: `${books.length + 1}`,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

router
  .route(`/:id`)
  .get((req, res) => {
    const book = books.find((b) => b.id === req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  })
  .put((req, res) => {
    const { title, author } = req.body;
    const book = books.find((b) => b.id === req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    if (title) book.title = title;
    if (author) book.author = author;
    res.json(book);
  });

module.exports = router;
