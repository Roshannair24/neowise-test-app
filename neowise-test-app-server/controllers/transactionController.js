const createTransaction = (req, res) => {
  console.log("req.body", req.body);

  res.json({
    msg: "createTransaction",
  });
};

module.exports = { createTransaction };
