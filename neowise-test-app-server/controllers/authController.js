const mongoose = require("mongoose");
const User = require("../modals/userModal");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const validateCredentials = async (req, res) => {
  const { uuid, password } = req.body;
  const user = await User.findOne({ id: uuid });

  console.log("user", user);

  if (user && password  === "development") {
    const accessToken = jwt.sign({ name: user.name, id: user.id }, SECRET_KEY);
    res.json({ accessToken });
  } else {
    res.json({ msg: "Username or password incorrect" });
  }
};

module.exports = {
  validateCredentials,
};
