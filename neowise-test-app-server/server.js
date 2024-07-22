const https = require("https");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const { mongodbUrl } = require("./config/url");
const { createClient } = require("redis");
const mongoose = require("mongoose");

const { authenticateJWT } = require("./middlewares/testMiddleware");

const app = express();

const port = 8500;
const cors = require("cors");

app.use(cors());

app.use(express.json({ limit: "50mb" }));

let transactionRoute = require("./routes/transactionsRoute");
let usersRoute = require("./routes/usersRoute");
let authRoute = require("./routes/authRoute");

app.use("/api/transactions", authenticateJWT, transactionRoute);
app.use("/api/users", authenticateJWT, usersRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("neowise Hello World! HTTPS!");
});

try {
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
} catch (error) {
  console.log("mongoose error=>", error);
}

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
