const User = require("../modals/userModal");
const Transaction = require("../modals/transactionModal");

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

module.exports = { findUser, objectIsEmpty, findTransaction };
