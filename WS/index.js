const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.json");
const fs = require('fs')

const axios = require("axios");
//

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;
app.post("/config", async (req, response) => {
    const { firstName, lastName, gender, dob } = req.body;
    console.log(">>>>>>>>>>>",{ firstName, lastName, gender, dob })
    config.push({ firstName, lastName, gender, dob });
    fs.writeFileSync("./config.json",JSON.stringify(config))
    response.json({ message: "Data submitted successfully" });
  });

app.get("/config", async (req, response) => {
  const data = fs.readFileSync("./config.json").toString()
  response.json(JSON.parse(data));
});



app.listen(port, (err) => {
  if (err) console.log(err);
  console.log("Server listing on port: ", port);
});
