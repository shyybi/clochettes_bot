const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        function CreateMsg() {
            const userName = 'Charlie!';
            const userIcon = 'https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5';
            const logId = '1168548140496994425';
            const author = message.author;
            const content = message.content;
            const msgChan = message.channel.name;
            const logChann = message.guild.channels.cache.get(logId);

            const logMsg = new EmbedBuilder()
                .setColor(0x48f542)
                .setTitle('Created Message')
                .addFields(
                    { name: " ", value: " " },
                    { name: 'From user:', value: `${author}`, inline: true },
                    { name: 'In:', value: `#${msgChan}`, inline: true },
                    { name: " ", value: " " },
                    { name: " ", value: " " },
                    { name: 'Content', value: `${content}` },
                    { name: " ", value: " " },
                )
                .setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg")
                .setTimestamp()
                .setFooter({ text: `by ${userName}`, iconURL: `${config.userIcon}` });

            if(message.author.id === "1177559796975669340") {
                return;
            }
            else{
                logChann.send({ embeds: [logMsg] });
            }
        }
        CreateMsg();

    }
};
