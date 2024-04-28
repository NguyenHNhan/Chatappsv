const express = require('express');
const { viewConversations } = require('../controllers/conversations');
const router1 = express.Router();


router1.post('/viewconversation', viewConversations);

module.exports = router1;
