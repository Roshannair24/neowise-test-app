const User = require("../modals/userModal");
const Transaction = require("../modals/transactionModal");

const delay = (milliseconds) => {
  let delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(milliseconds);
    }, milliseconds);
  });

  return delayPromise;
};

const objectIsEmpty = (localObj) => {
  if (Object.keys(localObj).length > 0) {
    return false;
  } else {
    return true;
  }
};

const findUser = (localId) => {
  let UserPromise = new Promise((resolve, reject) => {
    User.find({ id: localId })
      .then((data) => {
        // console.log("user data=", data);

        if (data.length > 0) {
          resolve(data[0]);
        } else {
          resolve({});
        }
      })
      .catch((err) => {
        console.log("err=", err);
        reject({ err: err });
      });
  });

  return UserPromise;
};

const findTransaction = (localId) => {
  let TransactionPromise = new Promise((resolve, reject) => {
    Transaction.find({
      transactionId: localId,
    })
      .then((data) => {
        // console.log("user data=", data);

        if (data.length > 0) {
          resolve(data[0]);
        } else {
          resolve({});
        }
      })
      .catch((err) => {
        console.log("err=", err);
        reject({ err: err });
      });
  });

  return TransactionPromise;
};

const deleteMatchingPatternsRedis = async (pattern) => {
  let cursor = "0";
  console.log("global.redisClient", global.redisClient);

  let deleteMatchingPatternsRedisPromise = new Promise(
    async (resolve, reject) => {
      const reply = await global.redisClient.scan(
        cursor,
        "MATCH",
        pattern,
        "COUNT",
        100
      );

      console.log("reply", reply);

      let keys = reply.keys;

      if (keys?.length > 0) {
        console.log("1");

        for (const singleKey of keys) {
          console.log("singleKey", singleKey);

          let delResp = await global.redisClient.del(singleKey);

          console.log(" delResp", delResp);
        }
      }

      resolve({ msg: "All keys matching the pattern have been deleted" });
    }
  );

  return deleteMatchingPatternsRedisPromise;
};

module.exports = {
  delay,
  findUser,
  objectIsEmpty,
  findTransaction,
  deleteMatchingPatternsRedis,
};
