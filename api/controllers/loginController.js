const postRegister = (req, res) => {
  const {name, email, password} = req.body;
  res.json({name, email, password});
}

module.exports = postRegister;