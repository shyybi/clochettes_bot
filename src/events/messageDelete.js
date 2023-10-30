const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'messageDelete',
    once: false,
    async execute(message) {
        function deleteMsg() {
            const userName = 'Charlie !'; // Charlie's account
            const userIcon = 'https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5';
            const logId = '1168548140496994425';
            const author = message.author;
            const content = message.content;
            const msgChan = message.channel.name;
            const logChann = message.guild.channels.cache.get(logId);

            const logMsg = new EmbedBuilder()
                .setColor(0xf54242)
                .setTitle("Deleted Message")
                .addFields(
                    { name: " ", value: " " },
                    { name: 'From user:', value: `${author}`, inline: true },
                    { name: " ", value: " ", inline: true },
                    { name: 'In:', value: `#${msgChan}`, inline: true },
                    { name: " ", value: " " },
                    { name: " ", value: " " },
                    { name: 'Content', value: `${content}` },
                    { name: " ", value: " " },
                )
                .setThumbnail('https://cdn.discordapp.com/avatars/1006183291864481873/40fd85bc6ef83af39ca8e6d08b6c619d')
                .setTimestamp()
                .setFooter({ text: `by ${userName}`, iconURL: `${userIcon}` });

            logChann.send({ embeds: [logMsg] });
        }
        deleteMsg();
    }
};
