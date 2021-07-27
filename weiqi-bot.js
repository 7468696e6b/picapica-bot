'use strict';
// Import the discord.js module
const Discord = require('discord.js');
// dotenv module to hide TOKEN from GitHub using .env and .gitignore
const dotenv = require('dotenv');
// const {StreamController, Controller, Command, Response} = require('@sabaki/gtp');

dotenv.config();
// https://discordjs.guide/popular-topics/embeds.html
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Go board 圍棋')
	// .setURL('https://discord.js.org/')
	// .setAuthor('picapicaBot')
	// .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	// .setDescription('Some description here')
	// .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	// .addFields(
	// 	{ name: 'Regular field title', value: 'Some value here <:xx:869314477575778346>ok<:xx:869314477575778346>' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
	// )
	// .addField('Inline field title', 'Some value here', true)
	// .setImage('https://i.imgur.com/wSTFkRM.png')
	// .setTimestamp()
	// .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
	.addFields (
		{name: 'Go 3x3', value: '<:ul:869314217780604948><:um:869314217575079996><:ur:869314217570881557>\n<:lm:869314217621213214><:xx:869314477575778346><:rm:869314217558278254>\n<:bl:869314217587671050><:bm:869314217688334346><:br:869314217239523360>'},
		{name: 'Go plaintext', value:'```    A B C D E F G H J K L M N O P Q R S T\n19 . . . . . . . . . . . . . . . . . . . 19\n18 . . . . . . . . . . . . . . . . . . . 18\n17 . . . . . . . . . . . . . . . . . . . 17\n16 . . . + . . . . . + . . . . . + . . . 16\n15 . . . . . . . . . . . . . . . . . . . 15\n14 . . . . . . . . . . . . . . . . . . . 14\n13 . . . . . . . . . . . . . . . . . . . 13\n12 . . . . . . . . . . . . . . . . . . . 12\n11 . . . . . . . . . . . . . . . . . . . 11\n10 . . . + . . . . . + . . . . . + . . . 10\n 9 . . . . . . . . . . . . . . . . . . .  9\n 8 . . . . . . . . . . . . . . . . . . .  8\n 7 . . . . . . . . . . . . . . . . . . .  7\n 6 . . . . . . . . . . . . . . . . . . .  6\n 5 . . . . . . . . . . . . . . . . . . .  5\n 4 . . . + . . . . . + . . . . . + . . .  4\n 3 . . . . . . . . . . . . . . . . . . .  3\n 2 . . . . . . . . . . . . . . . . . . .  2\n 1 . . . . . . . . . . . . . . . . . . .  1\n   A B C D E F G H J K L M N O P Q R S T```'},
		{name: 'Go plaintext game sample display', value:'```    A B C D E F G H J K L M N O P Q R S T        Last move: White Q4\r\n 19 . . . . . . . . . . . . . . . . . . . 19\r\n 18 . . . . . . . . . . . . . . . . . . . 18\r\n 17 . . . . . . . . . . . . . . . . . . . 17\r\n 16 . . . X . . . . . + . . . . . O . . . 16\r\n 15 . . . . . . . . . . . . . . . . . . . 15\r\n 14 . . . . . . . . . . . . . . . . . . . 14\r\n 13 . . . . . . . . . . . . . . . . . . . 13\r\n 12 . . . . . . . . . . . . . . . . . . . 12\r\n 11 . . . . . . . . . . . . . . . . . . . 11\r\n 10 . . . + . . . . . + . . . . . + . . . 10\r\n  9 . . . . . . . . . . . . . . . . . . .  9\r\n  8 . . . . . . . . . . . . . . . . . . .  8\r\n  7 . . . . . . . . . . . . . . . . . . .  7\r\n  6 . . . . . . . . . . . . . . . . . . .  6\r\n  5 . . . . . . . . . . . . . . . . . . .  5\r\n  4 . . . X . . . . . + . . . . .(O). . .  4\r\n  3 . . . . . . . . . . . . . . . . . . .  3\r\n  2 . . . . . . . . . . . . . . . . . . .  2\r\n  1 . . . . . . . . . . . . . . . . . . .  1\r\n    A B C D E F G H J K L M N O P Q R S T```'},
		// {name: 'chess plaintext', value:'```♜♞♝♛♚♝♞♜\n♟︎♟︎♟︎♟︎♟︎♟︎♟︎♟︎```'}
		{name: 'chess emoji', value:'<:Br:869337104637911100><:Bn:869337104637906954><:Bb:869337104579166258><:Bq:869337104377843713><:Bk:869337104604332082><:Bb:869337104579166258><:Bn:869337104637906954><:Br:869337104637911100>\n<:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150><:Bp:869337104612741150>\n⬛⬜⬛⬜⬛⬜⬛⬜\n⬜⬛⬜⬛⬜⬛⬜⬛\n⬛⬜⬛⬜⬛⬜⬛⬜\n⬜⬛⬜⬛⬜⬛⬜⬛\n<:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569><:Wp:869337104432365569>\n<:Wr:869337104646307880><:Wn:869337104608559124><:Wb:869337104583376946><:Wq:869337104583372801><:Wk:869337104344313947><:Wb:869337104583376946><:Wn:869337104608559124><:Wr:869337104646307880>'}
	)

// channel.send(exampleEmbed);

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
client.on('message', message => {
	// If the message is "ping"
	if (message.content === 'playweiqi') {
	  // Send "pong" to the same channel
	  message.channel.send(exampleEmbed);
	}
  });
// Log our bot in using the token from https://discord.com/developers/applications
// client.login('your token here');
client.login(process.env.TOKEN);
