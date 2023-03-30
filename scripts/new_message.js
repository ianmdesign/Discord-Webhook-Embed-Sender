const axios = require('axios');
const path = require('path');
const config = require('../config.json');

const messagePath = path.join(__dirname, '..', config.messageFilePath);
const message = require(messagePath);

axios.post(config.webhookUrl, message)
  .then(function (response) {
    console.log('Message sent successfully!', message.content);
  })
  .catch(function (error) {
    console.error('Error sending message:', error);
  });
