'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 * https://discord.js.org/#/docs/main/stable/examples/ping
 * https://discordjs.guide/preparations/setting-up-a-bot-application.html#keeping-your-token-safe
 */

// Import the discord.js module
const Discord = require('discord.js');
// dotenv module to hide TOKEN from GitHub using .env and .gitignore
const dotenv = require('dotenv');
dotenv.config();

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
// client.login('your token here');
client.login(process.env.TOKEN);
