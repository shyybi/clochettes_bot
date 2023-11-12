const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('.'),
    run: async (Client, interaction) => {

        await interaction.reply('aaar')
    },
};