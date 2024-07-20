const myLogger = (req, res, next) => {
  console.log("MIDDLEWARE LOGGED");
  next();
};

const validateUser = (req, res, next) => {
  console.log("validateUser MIDDLEWARE LOGGED");

  console.log("req.body", req.body);

  if (req?.body?.name && req?.body?.balance) {
    next();
  } else {
    console.log("INVALID=>", req.body);
    res.json({ msg: "Invalid Params" });
  }
};

const validateTransaction = (req, res, next) => {
  console.log("validateTransaction MIDDLEWARE LOGGED");

  console.log("req.body", req.body);

  if (
    req?.body?.details &&
    req?.body?.amount &&
    req?.body?.senderId &&
    req?.body?.receiverId
  ) {
    next();
  } else {
    console.log("INVALID=>", req.body);
    res.json({ msg: "Invalid Params" });
  }
};

const authoriseDelete = (req, res, next) => {
  console.log("authoriseDelete MIDDLEWARE LOGGED");

  console.log("process.env.NODE_ENV ", process.env.NODE_ENV);

  if (process.env.NODE_ENV === "development") {
    next();
  } else {
    res.json({ msg: "Invalid Params" });
  }
};

module.exports = {
  myLogger,
  validateUser,
  authoriseDelete,
  validateTransaction
};
