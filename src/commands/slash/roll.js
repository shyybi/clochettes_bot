const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription("Roll the dice"),
    run: async (Client, interaction) => {
        let numbers = ["1", "2", "3", "4", "5", "6"];
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers[randomIndex];
        
        if (randomNumber % 2 === 0) {
            await interaction.reply(`The dice roll great and give a **` + randomNumber + `**... This is a win !`);
        } else {
            await interaction.reply(`The dice roll great and give a **` + randomNumber + `**... This is a loose.`);
        }
    },
};
