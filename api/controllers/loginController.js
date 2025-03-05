const User = require("../models/User"); //db user
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    console.log(`userDoc: ${userDoc}`);
    if (!userDoc) {
      return res.status(404).json({ error: "계정이 없습니다." });
    }
    const passOk = await bcrypt.compare(req.body.password, userDoc.password);
    if (!passOk) {
      return res.status(422).json({ error: "비밀번호가 틀렸습니다." });
    }

    const token = jwt.sign(
      // { email: userDoc.email, id: userDoc._id, name: userDoc.name },
      //이름을 토큰에 넣에서 클라이언트에서 바로 이름 찾기
      { email: userDoc.email, id: userDoc._id,},
      process.env.JWT_SECRET,
      //이름을 넣지 않고 /profile에서 토큰을 받을때 토큰에 있는 이메일을 db에 요청한 후 이름 반환
      { expiresIn: "1h" }
    );
    console.log(`token: ${JSON.stringify(jwt.decode(token))}`);
    return res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({ message: "로그인 성공", token, userDoc });
  } catch (err) {
    console.error("로그인 오류", err);
    return res.status(500).json({ error: "서버 오류" });
  }

  // if (!userDoc) {
  //   const passOk = bcrypt.compareSync(req.body.password, userDoc.password);
  //   if (passOk) {
  //     jwt.sign(
  //       { email: userDoc.email, id: userDoc._id },
  //       process.env.JWT_SECRET,
  //       {expiresIn: "1h"},
  //       (err, token) => {
  //         if (err){
  //           return res.status(500).json({error: "JWT 생성 오류"});
  //         }
  //         res.cookie("token", token).status(200).json({message: "로그인 성공", token});
  //       }
  //     );
  //   } else {
  //     res.status(422).json({ error: "비밀번호가 틀렸습니다." });
  //   }
  // } else {
  //   return res.status(404).json({ error: "계정이 없습니다." });
  // }
};

module.exports = postLogin;
