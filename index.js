const { CLient, GatewayIntentBits, discordSort, MEssageManager } = require("discord.js");
const Discord = require("discord.js");
const token = ("")
const bot = new Discord.Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})
bot.login("token")

bot.on('ready', ()=> {
    bot.user.setActivity('Sodium Development')
})