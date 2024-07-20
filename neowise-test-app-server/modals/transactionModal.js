//Schema to save withdraw in MongoDB
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true,
    },

    details: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    senderId: {
      type: String,
      required: true,
    },

    receiverId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// // Ensure index on 'transactionId' field
transactionSchema.index({ transactionId: 1 }, { unique: true });

const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "Transactions"
);
module.exports = Transaction;
