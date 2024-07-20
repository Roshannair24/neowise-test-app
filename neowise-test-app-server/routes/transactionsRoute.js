const router = require("express").Router();

const { createTransaction } = require("../controllers/transactionController");
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

module.exports = router;
