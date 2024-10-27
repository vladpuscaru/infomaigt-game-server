const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.post("/api/data", async (req, res, next) => {
  console.log(req);
});

app.listen(() => {
  console.log(`Listening on port ${port}`);
});

