const User = require("../models/User"); //db user
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  const jwtSecret = "dfmklcvjnlcfkvmflk";
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  console.log(userDoc);
  if (userDoc) {
    const passOk = bcrypt.compareSync(req.body.password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("pass ok");
        }
      );
      res.status(200).json({message: "로그인 성공"})
    } else {
      res.status(422).json({ error: "비밀번호가 틀렸습니다." });
    }
  } else {
    return res.status(404).json({ error: "계정이 없습니다." });
  }
};

module.exports = postLogin;
