const mongoose = require("mongoose");
const User = require("../modals/userModal");
const Transaction = require("../modals/transactionModal");
const { findUser, objectIsEmpty } = require("../utils/utils");

const createTransaction = async (req, res) => {
  console.log("createTransaction req.body", req.body);
  const session = await mongoose.startSession();
  try {
    let respArr = await Promise.all([
      findUser(req?.body?.senderId),
      findUser(req?.body?.receiverId),
    ]);

    console.log("respArr", respArr);

    let senderData = respArr[0];
    let receiverData = respArr[1];

    // Validate the transaction to check if the sender has sufficient balance.

    if (objectIsEmpty(senderData) || objectIsEmpty(receiverData)) {
      throw new Error("Users Not Found");
    } else {
      if (Number(senderData?.balance) < Number(req?.body?.amount)) {
        throw new Error("Insufficient Balance");
      } else {
        session.startTransaction();

        // subtract from sender
        const resp1 = await User.findOneAndUpdate(
          { id: senderData?.id },
          { $inc: { balance: Number(req?.body?.amount) * -1 } },
          { session }
        );
        // add to receiver
        const resp2 = await User.findOneAndUpdate(
          { id: receiverData?.id },
          { $inc: { balance: Number(req?.body?.amount) } },
          { session }
        );

        let newTransaction = new Transaction(req.body);
        let transactionResp = await newTransaction.save();

        // Commit the transaction
        await session.commitTransaction();
        console.log("Transaction committed successfully");

        res.json({
          msg: "Transaction executed",
          data: transactionResp,
        });
      }
    }
  } catch (error) {
    console.log("err=", error);

    res.json({
      msg: "failed",
      error: error?.message || error,
    });
  } finally {
    session.endSession();
  }
};

module.exports = { createTransaction };
