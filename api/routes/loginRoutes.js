const express = require("express");
const router = express.Router();
const loginRouter = require("../controllers/loginController");

router.route("/").post(loginRouter);

module.exports = router;