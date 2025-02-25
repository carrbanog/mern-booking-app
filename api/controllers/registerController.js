const User = require("../models/User"); //db user
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    // const existingName = await User.findOne({name});
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: "이미 사용중인 이메일입니다." });
    }
    const userDoc = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    });
    res.status(201).json({
      message: "회원가입 성공",
      user: userDoc,
    });
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }

  // const {name, email, password} = req.body;
  // // console.log(name, email, password);
  // const existingUser = await User.findOne({email});
  // if(existingUser){
  //   console.log(existingUser.email);
  //   return res.status(400).json({message: "이미 사용중인 이메일입니다."});
  // }
  // const userDoc = await User.create({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password:bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
  // });
  // res.status(201).json({
  //   message: "회원가입 성공"
  // })
  // console.log(userDoc);
};

module.exports = postRegister;
