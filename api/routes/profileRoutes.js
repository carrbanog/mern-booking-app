const express = require("express");
const router = express.Router();
const profileRouter = require("../controllers/profileController");

router.route("/").get(profileRouter);

module.exports = router;