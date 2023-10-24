const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, ActivityType, Collection } = require("discord.js");
const Discord = require("discord.js");

const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);

const client = new Discord.Client({
  intents:[
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
  ]
})
client.login(config.token)

client.commands = new Collection();

const eventFiles = fs.readdirSync('./src/events');
eventFiles.forEach(async file => {
  const event = require(`./src/events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});