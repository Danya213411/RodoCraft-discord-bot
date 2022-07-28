const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once('ready', () => {
	console.log('Бот запущен');
});


client.login(token);