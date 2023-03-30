# Discord Webhook Embed Sender

This project provides a set of scripts for automating the sending and updating of messages on a Discord server through a webhook. The project is designed to be run on a Windows machine and includes Windows batch scripts for executing the Node.js scripts.

## Prerequisites

To run the scripts, you will need the following software installed on your machine:

- Node.js
- npm

## Getting Started

1. Clone this repository to your local machine.
2. Open a command prompt or terminal window in the project directory.
3. Run the following command to install the required dependencies:

`npm install`


4. Update the `config.json` file with your webhook URL, channel ID, message ID, and message payload details.
5. Update the `messages/message.json` file with the message payload that you want to send to the Discord server.
6. Run the `.new.bat` script to send a new message to the Discord server, or the `.update.bat` script to update an existing message on the server.

## Configuration

The `config.json` file includes the following fields:

- `messageFilePath`: The relative path to the message payload file.
- `webhookUrl`: The URL of the webhook to send the message to.
- `updateInChannelId`: The ID of the channel where the message to be updated is located.
- `messageId`: The ID of the message to be updated.

The `messages/message.json` file contains the message payload that will be sent to the webhook URL. The file includes fields for the username, avatar, content, embeds, and additional attributes such as colors, fields, images, and footers.

## Usage

To send a new message to the Discord server, run the following command:

`.new.bat`


To update an existing message on the Discord server, run the following command:

`.update.bat`


## Acknowledgments

- This project uses the following open-source libraries:
  - Axios# Discord Webhook Embed Sender

This project provides a set of scripts for automating the sending and updating of messages on a Discord server through a webhook. The project is designed to be run on a Windows machine and includes Windows batch scripts for executing the Node.js scripts.

## Prerequisites

To run the scripts, you will need the following software installed on your machine:

- Node.js
- npm

## Getting Started

1. Clone this repository to your local machine.
2. Open a command prompt or terminal window in the project directory.
3. Run the following command to install the required dependencies:

`npm install`


4. Update the `config.json` file with your webhook URL, channel ID, message ID, and message payload details.
5. Update the `messages/message.json` file with the message payload that you want to send to the Discord server.
6. Run the `.new.bat` script to send a new message to the Discord server, or the `.update.bat` script to update an existing message on the server.

## Configuration

The `config.json` file includes the following fields:

- `messageFilePath`: The relative path to the message payload file.
- `webhookUrl`: The URL of the webhook to send the message to.
- `updateInChannelId`: The ID of the channel where the message to be updated is located. (Only required for updating a message)
- `messageId`: The ID of the message to be updated. (Only required for updating a message)

The `messages/message.json` file contains the message payload that will be sent to the webhook URL. The file includes fields for the username, avatar, content, embeds, and additional attributes such as colors, fields, images, and footers. This can be changed and replaced as needed, so long as `messageFilePath` is updated to support the changed name.

## Usage

To send a new message to the Discord server, run the following command:

`.new.bat`


To update an existing message on the Discord server, run the following command:

`.update.bat`


## Acknowledgments

- This project uses the following open-source libraries:
  - Axios
  - Node.js
- This project was created by Ian McClellan as a personal project.

## License

This project is licensed under the MIT License - see `license.md`  for details.