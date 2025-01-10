const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = 'TU_TOKEN_DEL_BOT'; // YOUR TOKEN HERE

// Crea el cliente de Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const PREFIX = '!'; // CHANGE THE PREFIX IF YOU WANT

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong! 🏓');
    }
});

// Inicia sesión con el token
client.login(TOKEN);