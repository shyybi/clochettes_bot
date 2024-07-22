const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { ActivityType } = require('discord.js');
const { EmbedBuilder } = require('discord.js')
const consturl = 'https://twitch.tv/its_charlowotte'
module.exports = {
    name: 'ready',
    once: true,
    async execute(client, ready, message, channel ) {
        const rest = new REST({ version: '9' }).setToken(client.token);
        

        let status = [
            {
                name: 'ClochettesGames Studio',
            },
            {
                name: "https://clochettesgames.fr/"
            },
            {
                name: 'X : @clochettesgames',
            },
            {
                name: 'Git : Clochettes',
            },
            {
                name: "I'm Open Source !"
            }, 
            {
                name: 'A bad day, is just a little moment in your life',
            },
            {
                name: "Working on EdenGarden",
            },
            {
                name: 'Have you seen Eden ?',
            },
            {
                name: 'Who is in the mirror ?',
            },
            {
                name: 'My reflection winked at me',
            },
            {
                name: "I'm lost. I need help",
            },
            {
                name: "I feel empty inside...",
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
