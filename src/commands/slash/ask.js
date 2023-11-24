/** 
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Options } = require('discord.js');
const { OpenAI } = require('openai')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription("ask to Sodium's AI ")
        .addUserOption(option =>
            option.setName('question')
                .setDescription('The question ask to AI-lka')
                .setRequired(true)),
    run: async (Client, interaction) => {

    },
};
*/