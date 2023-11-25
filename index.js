const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, ActivityType, Collection, Intents} = require("discord.js");
const Discord = require("discord.js");

const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);

const client = new Discord.Client({
  intents:[
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.AutoModerationExecution,
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      
      /**
      GatewayIntentBits.GuildMemberRemove,
      GatewayIntentBits.GuildBanAdd,
       */
  ],
  partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "GUILD_SCHEDULED_EVENT"],
})
client.login(config.token)
client.slashcommands = new Collection()
client.slashdatas = []

fs.readdirSync('./src/events').forEach(async file => {
  const event = require(`./src/events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
})


const slashcommands = [];

fs.readdirSync('./src/commands/slash').forEach(async file => {
  const command = await require(`./src/commands/slash/${file}`);
  client.slashdatas.push(command.data.toJSON())
  client.slashcommands.set(command.data.name, command);
})



process.on("unhandledRejection", e => {
  console.log(e)
})
process.on("uncaughtException", e => {
  console.log(e)
})
process.on("uncaughtExceptionMonitor", e => {
  console.log(e)
})