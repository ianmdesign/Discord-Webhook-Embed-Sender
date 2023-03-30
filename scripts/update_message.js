const axios = require('axios');
const path = require('path');
const config = require('../config.json');

function updateMessage(messageId, updateInChannelId, webhookUrl, message) {
  axios.patch(`${webhookUrl}/messages/${messageId}`, message)
    .then(response => {
      console.log('Message updated successfully!');
    })
    .catch(error => {
      console.error('Error updating message: ', error);
    });
}

const { messageId, updateInChannelId, webhookUrl, messageFilePath } = config;

const messagePath = path.join(__dirname, '..', messageFilePath);
const message = require(messagePath);

updateMessage(messageId, updateInChannelId, webhookUrl, message);