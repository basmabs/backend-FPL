const User = require('../Models/User_Model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
  try {
    const find = await User.findOne({ email: req.body.email })
    if (find) {
      res.status(400).send({ message: `email exists, please choose another` })
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash
      const Users = await User.create(req.body)
      res.status(200).send(Users)
    }
  } catch (error) {
    res.status(500).send({ message: `server error` })
  }
};
exports.Login = async (req, res) => {
  try {
    const find = await User.findOne({ email: req.body.email })
    if (find) {
      const validatePassword = await bcrypt.compare(req.body.password, find.password)
      if (validatePassword) {
        const data = {
          email: find.email,
          id: find._id
        };
        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.send({ message: `'${req.body.name}', you are logged in`, token })
      } else {
        res.status(400).send({ message: `verify email or password` })
      };
    } else {
      res.status(400).send({ message: `verify email or password` })
    }
  } catch (error) {
    res.status(500).send({ message: error.message || `server error` })
  }
};

function handleClick() {
  const MAX_CLICKS = 5;
  const TIME_LIMIT = 24 * 60 * 60 * 1000;

  let clickCounter = 0;
  let lastClickTime = 0;

  const currentTime = Date.now();
  if (currentTime - lastClickTime > TIME_LIMIT) {
    clickCounter = 1;
  } else {
    clickCounter += 1;
  }
  if (clickCounter > MAX_CLICKS) {
    return new Error('Click limit exceeded');
  }
  lastClickTime = currentTime;
};
handleClick();
