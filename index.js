const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
