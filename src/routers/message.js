const express = require('express');
const { viewMessages, createMessage } = require('../controllers/message');
const router = express.Router();

router.post('/messages', createMessage);

router.post('/viewmessages', viewMessages);

module.exports = router;
