const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());

app.get("/api", async (req, res, next) => {
  res.send("Hello");
})

app.post("/api/data", async (req, res, next) => {
  console.log(req);

  res.json({value: "hello"});
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

app.listen(() => {
  console.log(`Listening on port ${port}`);
});

