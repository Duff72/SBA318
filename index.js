const express = require("express");
const app = express();
const PORT = 3000;

const booksRouter = require(`./routes/books`);
const moviesRouter = require(`./routes/movies`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `----${time.toLocaleTimeString()}: Received a ${req.method} request to ${
      req.url
    }.`
  );

  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Containing the data:`);
    console.log(`${JSON.stringify(req.body)}`);
  }

  next();
});

app.use(express.json());

app.use(`/api/books`, booksRouter);
app.use(`/api/movies`, moviesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
