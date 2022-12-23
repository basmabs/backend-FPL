const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
  {
    name: { type: String, required: [true, `name is required`] },
    email: { type: String, required: [true, `email is required`] },
    password: { type: String, required: [true, `password is required`] },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = mongoose.model('Users', User, 'Users');