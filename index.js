const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
