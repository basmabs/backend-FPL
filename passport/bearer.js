const User = require('../Models/User_Model');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
passport.use(new BearerStrategy((token, done) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  User.findOne({ _id: data.id }, function (error, user) {
    if (error) { return done(error); }
    if (!user) { return done(null, false) }
    return done(null, user, { scope: 'all' });
  });
}
));