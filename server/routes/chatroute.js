const express = require('express');
const router = express.Router();
const {getMessages, addMessages} = require("../controllers/chatcontroller")

router
// Get Messages
.get('/messages', getMessages)

// Add a Message
.post('/messages', addMessages)

module.exports = router