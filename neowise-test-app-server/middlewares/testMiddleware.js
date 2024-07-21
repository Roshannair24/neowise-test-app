const myLogger = (req, res, next) => {
  console.log("MIDDLEWARE LOGGED");
  next();
};

const transactionIdCacheMiddleware = async (req, res, next) => {
  console.log("transactionIdCacheMiddleware  req.query", req?.query);
  console.log("transactionIdCacheMiddleware  req.params", req?.params);

  const key = req?.params?.transactionId || "";

  // console.log(" global.redisClient", global.redisClient);

  try {
    const value = await global?.redisClient?.get(key);
    console.log("value=", value);

    if (JSON.parse(value) === null) {
      next();
    } else {
      res.json(JSON.parse(value));
    }
  } catch (error) {
    res.json({ error: error || "redis server not running" });
  }
};

const transactionsPaginatedListCacheMiddleware = async (req, res, next) => {
  console.log(
    "transactionsPaginatedListCacheMiddleware   req.query",
    req?.query
  );
  console.log(
    "transactionsPaginatedListCacheMiddleware   req.params",
    req?.params
  );

  const pageNumber = Number(req?.query?.page) || 1; // Page number (default is 1)
  const pageSize = Number(req?.query?.limit) || 3; // Number of documents per page

  const key = `PAGE${pageNumber}LIMIT${pageSize}` || "";
  try {
    const value = await global?.redisClient?.get(key);

    console.log("value=", value);

    if (JSON.parse(value) === null) {
      next();
    } else {
      // res.json({
      //   msg: "Transactions",
      //   list: JSON.parse(value),
      // });

      res.json(JSON.parse(value));
    }
  } catch (error) {
    res.json({ error: error || "redis server not running" });
  }
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
  validateTransaction,
  transactionIdCacheMiddleware,
  transactionsPaginatedListCacheMiddleware,
};
