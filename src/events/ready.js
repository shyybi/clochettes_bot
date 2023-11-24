const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { ActivityType } = require('discord.js');
const { EmbedBuilder } = require('discord.js')
const consturl = 'https://twitch.tv/charliereckt'
module.exports = {
    name: 'ready',
    once: true,
    async execute(client, ready, message, channel ) {
        const rest = new REST({ version: '9' }).setToken(client.token);
        

        let status = [
            {
                name: 'ClochettesDev',
            },
            {
                name: "Made by Clochettes",
            },
            {
                name: "https://clochettes.me/"
            },
            {
                name: 'X : @cl0w0chettes',
            },
            {
                name: 'Git : Clochettes',
            },
            {
                name: "I'm Open Source !"
            }, 
        ]
          
        setInterval(()=> {
            let random = Math.floor(Math.random() * status.length)
            client.user.setActivity(status[random], {
                    type: ActivityType.Streaming,
                    url: consturl
                }
                )
        }, 5000)

        console.log(`${client.user.username} en ligne ! (${client.user.id}) `)
        console.log(`Discord Invite : https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot%20applications.commands&permissions=8`)
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: client.slashdatas },
            );
        } catch (error) {
            console.error(error);
        }
        
    }
};