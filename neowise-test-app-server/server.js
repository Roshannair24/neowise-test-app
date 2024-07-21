const https = require("https");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const { mongodbUrl } = require("./config/url");
const { createClient } = require("redis");
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
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection with mongo established succesfully");
});

global.redisClient = null;
//redis
const createRedisConnection = async () => {
  global.redisClient = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  // await  global.redisClient.set("key", "value");
  // const value = await  global.redisClient.get("key");
  // console.log("value=", value);
  // await client.disconnect();
};

createRedisConnection();

// SSL/TLS certificate files
const options = {
  key: fs.readFileSync("credentials/neoWiseServer.key"),
  cert: fs.readFileSync("credentials/neoWiseServer.cert"),
};

// HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`HTTPS server running on port ${port}`);
});
