const router = require("express").Router();

const {
  createTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const {
  myLogger,
  validateTransaction,
} = require("../middlewares/testMiddleware");

router.route("/test").post((req, res) => {
  res.json({
    msg: "test",
  });
});

router.route("/").post(validateTransaction, createTransaction);

router.route("/:transactionId").delete(deleteTransaction);

module.exports = router;
