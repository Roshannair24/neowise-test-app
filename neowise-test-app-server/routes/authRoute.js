const router = require("express").Router();

const { validateCredentials } = require("../controllers/authController");

router.route("/validate-login-cred").post(validateCredentials);

module.exports = router;
