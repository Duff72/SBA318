const express = require(`express`);
const router = express.Router();

const movies = require(`../data/movies`);

router.post("/", (req, res) => {
  const { title, author: director } = req.body;
  if (!title || !director) {
    return res.status(400).json({ error: "Title and director are required" });
  }
  const newMovie = {
    id: `${books.length + 1}`,
    title,
    director: director,
  };
  books.push(newMovie);
  res.status(201).json(newMovie);
});

router
  .route(`/:id`)
  .get((req, res) => {
    const movie = movies.find((m) => m.id === req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(movie);
  })
  .put((req, res) => {
    const { title, author: director } = req.body;
    const movie = movies.find((b) => b.id === req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Book not found" });
    }
    if (title) movie.title = title;
    if (director) movie.author = director;
    res.json(movie);
  })
  .patch((req, res) => {
    res.send("Patch request received");
  })
  .delete((req, res) => {
    res.send("Delete request received");
  });

module.exports = router;
