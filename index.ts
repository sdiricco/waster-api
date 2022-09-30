import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/waste", (req, res) => {
  res.send("waste")
});

app.listen(port, () => {
  return console.log(`App is running on http://localhost:${port}`);
});
