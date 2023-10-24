const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { ActivityType } = require('discord.js');
const consturl = 'https://twitch.tv/charliereckt'
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const rest = new REST({ version: '9' }).setToken(client.token);
        

        let status = [
            {
                name: 'Sodium Development',
            },
            {
                name: "Made by Charlie",
            },
            {
                name: 'X : @SodiumDev',
            },
            {
                name: 'Git : Sodium-Dev',
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
        //
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