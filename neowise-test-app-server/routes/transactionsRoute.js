const router = require("express").Router();

const {
  getTransaction,
  getTransactions,
  createTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");
const {
  myLogger,
  validateTransaction,
  transactionIdCacheMiddleware,
  transactionsPaginatedListCacheMiddleware,
} = require("../middlewares/testMiddleware");

router.route("/test").post((req, res) => {
  res.json({
    msg: "test",
  });
});

router
  .route("/")
  .get(transactionsPaginatedListCacheMiddleware, getTransactions);

router
  .route("/:transactionId")
  .get(transactionIdCacheMiddleware, getTransaction);

router.route("/").post(validateTransaction, createTransaction);

router.route("/:transactionId").delete(deleteTransaction);

module.exports = router;
