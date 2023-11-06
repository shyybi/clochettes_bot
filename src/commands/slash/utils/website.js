const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription("Show you all the Sodium's Website"),
    run: async (client, interaction) => {
        const userName = 'Charlie !'; // Charlie's account
        const userIcon = 'https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5';

        const sodiumsite = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Our Website')
            .addFields(
                { name: "Sodium", value: "https://sodium.dev/" },
                { name: "Sodium Store", value: "https://store.sodium.dev/" },
                { name: "X", value: "https://x.com/SodiumDev/" },
                { name: "Github", value: "https://github.com/Sodium-Dev/" },
                { name: "Discord", value: "https://discord.sodium.dev/" }
            )
            .setThumbnail('https://cdn.discordapp.com/avatars/1006183291864481873/40fd85bc6ef83af39ca8e6d08b6c619d')
            .setTimestamp()
            .setFooter({ text: `By ${userName}`, iconURL: userIcon });

        interaction.reply({ embeds: [sodiumsite] });
    },
};
