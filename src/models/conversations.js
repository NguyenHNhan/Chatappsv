const mongoose = require('mongoose');

const conversationsSchema = new mongoose.Schema({
  cvs_user_1: {
    type: String,
    required: true
  },
  cvs_user_2: {
    type: String,
    required: true
  },
});

const Conversations = mongoose.model('Conversations', conversationsSchema);

module.exports = Conversations;
