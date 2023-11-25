const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuild, EmbedBuilder } = require('discord.js')
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('.'),
    run: async (Client, client, interaction) => {
        const serverCount = client.guilds.cache.size;


        const botinfo = new EmbedBuilder()

        .setTitle("Bot's informations")
        .addFields(
            {name: "Online since", value:"<t:1691509860:R>", inline: true},
            {name: "\u200b", value: "\u200b", inline:true},
            {name: "Made by Clochettes", value:"\u200b", inline: true},
            {name: "\u200b", value: "\u200b", inline:true},
            {name: "Active on", value: `${serverCount} servers`}
        )
        .setThumbnail(config.clientIcon)
        await interaction.reply({embeds: [botinfo]})
    },
};