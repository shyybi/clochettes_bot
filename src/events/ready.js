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
                name: 'Sodium Development',
            },
            {
                name: "Made by Charlie",
            },
            {
                name: "https://sodium.dev/"
            },
            {
                name: 'X : @SodiumDev',
            },
            {
                name: 'Git : Sodium-Dev',
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
        
            const ticketId = '1165957993691611147'
            const ticketChan = "channel(ticketId)"
            console.log(channel)
            const userName = 'Charlie!';
            const userIcon = 'https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5';
            const ticketEmbed = new EmbedBuilder()
                .setColor(0x48f542)
                .setTitle('Ticket')
                .addFields(
                    { name: " ", value: "Create a ticket here" }
                )
                .setThumbnail('https://cdn.discordapp.com/avatars/1006183291864481873/40fd85bc6ef83af39ca8e6d08b6c619d')
                .setTimestamp()
                .setFooter({ text: `by ${userName}`, iconURL: `${userIcon}` });

            //ticketChan.send({ embeds: [ticketEmbed] });
    }
};