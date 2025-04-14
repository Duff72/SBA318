const express = require("express");
const app = express();
const PORT = 3000;

const usersRouter = require(`./routes/users`);

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

app.use(`/api/users`, usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
