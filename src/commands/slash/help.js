const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js')
const client = require('discord.js')
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help Embed'),
    run: async (client, interaction, GuildMembers) => {

        const adminHelp = new EmbedBuilder()
            .setColor(config.embedColor)
            .setTitle('Help Page')
            .addFields(
                {name: "**Moderations commands**", value:"\u200b"},
                {name: "/ban", value: "a simple ban command", inline:true},
                {name: "/mute", value: "a simple timeout command", inline:true},
                {name: "/kick", value: "a simple kick command", inline:true},
                {name: "\u200b", value: "\u200b"},
                {name: "**Users commands**", value: "\u200b"},
                {name: "/help", value:"Show this Embed", inline:true},
                {name: "/roll", value: "Roll a dice", inline:true},
                {name: "\u200b", value: "\u200b", inline:true},
                {name: "/website", value: "Show the Clochettes's Website", inline:true},
                {name: "/bot", value: "Show the bot informations", inline:true}
            )
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTimestamp()
            .setFooter({ text: `by ${config.userName}`, iconURL: `${config.userIcon}` });

            const userHelp = new EmbedBuilder()
            .setColor(config.embedColor)
            .setTitle("Help Page")
            .addFields(
                {name: "**Users commands**", value: "\u200b"},
                {name: "/help", value:"Show this Embed", inline:true},
                {name: "/roll", value: "Roll a dice", inline:true},
                {name: "\u200b", value: "\u200b", inline:true},
                {name: "/website", value: "Show the Sodium's Website", inline:true},
                {name: "/bot", value: "Show the bot informations", inline:true}
            )
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTimestamp()
            .setFooter({ text: `by ${config.userName}`, iconURL: `${config.userIcon}` });

        if(interaction.member.roles.cache.has('1190416539330035872')){
            await interaction.reply({ embeds: [adminHelp]})
        }else{
            await interaction.reply({embeds: [userHelp]})
        }
    },
};