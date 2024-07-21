const User = require("../modals/userModal");
const { findUser } = require("../utils/utils");

const createUser = async (req, res) => {
  console.log("createUser req.body", req.body);

  try {
    let newUser = new User(req.body);
    let userResp = await newUser.save();

    console.log("userResp", userResp);

    res.json({
      msg: "Added successfully",
      data: userResp,
    });
  } catch (error) {
    res.json({
      msg: "failed",
      error: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  console.log("deleteUser req.body", req.body);

  try {
    let userResp = await User.deleteMany();

    console.log("userResp", userResp);

    res.json({
      msg: "Deleted Successfully",
      data: userResp,
    });
  } catch (error) {
    res.json({
      msg: "failed",
      error: error,
    });
  }
};

const getUserDetails = async (req, res) => {
  console.log("getUserDetailsasync  req.query", req?.query);
  console.log("getUserDetailsasync  req.params", req?.params);

  try {
    let resp = await findUser(req?.params?.uuid);

    console.log("uuu resp", resp);

    res.json(resp);
  } catch (error) {
    res.json({
      msg: "failed",
      error: error,
    });
  }
};

module.exports = { createUser, deleteUsers, getUserDetails };
