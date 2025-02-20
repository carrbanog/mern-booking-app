const express = require("express");
const router = express.Router();
const postRegister = require("../controllers/loginController");

router.route("/").post(postRegister);

module.exports = router;


