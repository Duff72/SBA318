const express = require(`express`);
const router = express.Router();

const movies = require(`../data/movies`);

router.post("/", (req, res) => {
  const { title, director } = req.body;
  if (!title || !director) {
    return res.status(400).json({ error: "Title and director are required" });
  }
  const newMovie = {
    id: `${movies.length + 1}`,
    title,
    director,
  };
  books.push(newMovie);
  res.status(201).json(newMovie);
});

router
  .route(`/:id`)
  .get((req, res) => {
    const movie = movies.find((m) => m.id === req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  })
  .put((req, res) => {
    const { title, director } = req.body;
    const movie = movies.find((b) => b.id === req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    if (title) movie.title = title;
    if (director) movie.director = director;
    res.json(movie);
  });

module.exports = router;
