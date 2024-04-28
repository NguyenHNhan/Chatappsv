const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  users_password: {
    type: String,
    required: true
  },
  users_fullname: {
    type: String,
    required: true
  },
  users_email: {
    type: String,
    required: true
  },
  users_status: {
    type: String,
    default: 'active'
  },
  users_username: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
