const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription("Show you all the Sodium's Website"),
    run: async (client, interaction) => {
        const userName = 'Charlie !'; // Charlie's account
        const userIcon = 'https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5';

        const sodiumsite = new EmbedBuilder()
            .setColor(config.embedColor)
            .setTitle('My Website')
            .addFields(
                { name: "My WebSite", value: "https://clochettes.me/" },
                { name: "X", value: "https://x.com/cl0w0chettes/" },
                { name: "Github", value: "https://github.com/clochettes/" },
                { name: "Discord", value: "https://discord.clochettes.me/" }
                )
                .setThumbnail(config.clientIcon)
                .setTimestamp()
                .setFooter({ text: `By ${userName}`, iconURL:`${config.userIcon}` });

        interaction.reply({ embeds: [sodiumsite] });
    },
};
