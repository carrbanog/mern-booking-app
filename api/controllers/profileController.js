const User = require("../models/User");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getProfie = async (req, res) => {
  const { token } = req.cookies;
  console.log(token)
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) {
        res.status(401).json({ error: "Unauthorized" });
        return; // 오류가 발생했을 경우 처리를 종료하고 응답을 한 번만 보냄
      }
      console.log(`user ${user.id}`);
      const userDoc = await User.findById(user.id);
      res.json(userDoc); // user 데이터를 한 번만 응답
      console.log(userDoc);
    });
  } else {
    res.json(null); // token이 없으면 null을 응답
  }
};

module.exports = getProfie;
