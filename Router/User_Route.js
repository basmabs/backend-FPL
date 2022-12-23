const express = require('express');
const passport = require('passport');
const { Register, Login, handleClick, AffectVotetoUser } = require('../Controllers/User_Controller');
const router = express.Router();
router.post('/register', Register);
router.post('/login', Login);

router.post('/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: 'Logout successful' });
    }
  });
});
router.post('/click', (req, res) => {
  try {
    handleClick();
    res.send('Click send');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
