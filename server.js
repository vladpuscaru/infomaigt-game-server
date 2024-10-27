// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 4000;
//
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.use(cors());
//
// app.get("/api", async (req, res, next) => {
//   res.send("Hello");
// })
//
// app.post("/api/data", async (req, res, next) => {
//   console.log(req);
//
//   res.json({value: "hello"});
// });
//
// const server =app.listen(() => {
//   console.log(`Listening on port ${port}`);
// });
//
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;
//
//
//

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());

app.get("/api", async (req, res, next) => {
  res.send("Hello");
})

app.post("/api/data", async (req, res, next) => {
  console.log(req);

  res.json({value: "hello"});
});
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
