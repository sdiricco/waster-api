// In src/index.js
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});