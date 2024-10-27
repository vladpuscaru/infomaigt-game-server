const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const axios = require("axios");

const BASE_URL = "https://api.mailjet.com/v3.1";
const API_KEY = "9c085655c76f76a4cca85e565d4023a6"; /* really secure haha */
const SECRET_KEY = "041e0fee9a00dec54e54e9c3fd539d8d"; /* really secure haha */

const SANDBOX_MODE = false;

// public RecipientData From;
// public List<RecipientData> To;
// public string Subject;
// public string TextPart;
// public string HTMLPart;
// }
//
// [System.Serializable]
// public struct BodyData
// {
//   public List<EmailData> Messages;
//   public bool SandboxMode;

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res, next) => {
  res.send("Hello");
})

app.post("/api/data", async (req, res, next) => {
  console.log(req.body);

  const apiResp = await axios.post(BASE_URL + "/send", {
    SandboxMode: SANDBOX_MODE,
    Messages: [
      {
        From: {
          Email: "vlad.cpuscaru@gmail.com",
          Name: "INFOMAIGT Game"
        },
        To: [
          {
            Email: "vlad.cpuscaru@gmail.com",
            Name: "Vlad Puscaru"
          }
        ],
        Subject: "INFOMAIGT Game Answers",
        TextPart: JSON.stringify(req.body),
        HTMLPart: JSON.stringify(req.body)
      }
    ]
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString('base64')}`
    }
  });

  return res.status(apiResp.status).send(apiResp.statusText);
});
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
