const router = require("express").Router();

const { createTransaction } = require("../controllers/transactionController");
const { myLogger } = require("../middlewares/testMiddleware");

router.route("/test").post((req, res) => {
  res.json({
    msg: "test",
  });
});

router.route("/").post(myLogger, createTransaction);

module.exports = router;
