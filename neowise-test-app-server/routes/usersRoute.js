const router = require("express").Router();

const {
  myLogger,
  validateUser,
  authoriseDelete,
} = require("../middlewares/testMiddleware");
const {
  createUser,
  deleteUsers,
  getUserDetails,
} = require("../controllers/usersController");

router.route("/test").post(myLogger, (req, res) => {
  res.json({
    msg: "users test",
  });
});

router.route("/").post(validateUser, createUser);

router.route("/:uuid").get(getUserDetails);

//delete user MASTER Access
router.route("/").delete(authoriseDelete, deleteUsers);

module.exports = router;
