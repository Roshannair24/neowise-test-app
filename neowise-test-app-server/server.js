const https = require("https");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const mongoUrl = "mongodb://127.0.0.1:27017/neowise-db";
const mongoose = require("mongoose");

const app = express();

const port = 8500;
const cors = require("cors");

app.use(cors());

app.use(express.json({ limit: "50mb" }));

let transactionRoute = require("./routes/transactionsRoute");
let usersRoute = require("./routes/usersRoute");

app.use("/api/transactions", transactionRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.send("neowise Hello World! HTTPS!");
});

//mongodb connection
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection with mongo established succesfully");
});

// SSL/TLS certificate files
const options = {
  key: fs.readFileSync("credentials/neoWiseServer.key"),
  cert: fs.readFileSync("credentials/neoWiseServer.cert"),
};

// HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`HTTPS server running on port ${port}`);
});
