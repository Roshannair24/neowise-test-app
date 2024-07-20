console.log("creating db...");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();
const https = require("https");
const serverUrl = require("./config/url");

/**
 * Disable only in development mode
 */
if (process.env.NODE_ENV === "development") {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
  axios.defaults.httpsAgent = httpsAgent;
  // eslint-disable-next-line no-console
  console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
}

const main = async () => {
  try {
    const data = fs.readFileSync("spec/users.json", "utf8");
    const usersJsonData = JSON.parse(data);

    for (const item of usersJsonData) {
      console.log("item=", item);
      console.log("process.env.NODE_ENV", process.env.NODE_ENV);

      let postUserResp = await axios.post(`${serverUrl}/api/users`, item);

      console.log("postUserResp=", postUserResp?.data);
    }
  } catch (err) {
    console.error("error=>");
    console.error(err);
  }
};

main();
