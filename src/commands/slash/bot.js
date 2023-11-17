const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuild, EmbedBuilder } = require('discord.js')
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('.'),
    run: async (Client, interaction) => {
        const botinfo = new EmbedBuilder()
        .setTitle("Bot's informations")
        .addFields(
            {name: "Online since : **<t:1691509860:R>**", value:"\u200b"},
            {name: "Made by 'charlierecket'", value:"\u200b"},
            {}

        )
        await interaction.reply({embeds: [botinfo]})
    },
};