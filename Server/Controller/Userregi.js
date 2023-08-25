const Uregster = require("../Schema/Register");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = async (req, res) => {
  const { Name, Email, Password } = req.body;
  const mail = await Uregster.findOne({ Email });
  const salt = await bcrypt.genSalt(10);
  const hasheddata = await bcrypt.hash(Password, salt);

  if (mail) {
    res.json("User already exist");
  } else {
    const createuser = await Uregster.create({
      Name,
      Email,
      Password: hasheddata,
    });
    res.json({ createuser, token: generatetoken(Uregster._id) });
  }
};
const generatetoken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret, {
    expiresIn: "1d",
  });
};
module.exports = User;
