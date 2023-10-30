const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('.'),
    run: async (Client, interaction) => {

        await interaction.reply('aaar')



    },
};