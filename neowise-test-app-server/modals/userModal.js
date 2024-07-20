//Schema to save withdraw in MongoDB
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// // Ensure index on 'id' field
userSchema.index({ id: 1 }, { unique: true });

const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
