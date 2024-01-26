const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, MessageEmbed } = require('discord.js');
const tmi = require('tmi.js');
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);

module.exports = {
    name: 'live',
    once: true,
    async execute(client, username, channels) {
        const twitchConfig = {
            options: { debug: true },
            connection: { reconnect: true },
            identity: {
                username: "Its_Charlowotte",
                password: config.twitchPassword,
            },
            channels: ['https://twitch.tv/its_charlowotte'],
        };

        const twitchClient = new tmi.Client(twitchConfig);

        const twitchChannel = client.channels.cache.get(channels);
        if (twitchChannel) {
            const embed = new MessageEmbed()
                .setDescription(`${username} est en live sur twitch !`)
                .setColor('#0099ff');

            twitchChannel.send({ embeds: [embed] });
        }

        twitchClient.connect();
        console.log(`username : ${username} \n channel : ${channels}`);
    },
};
