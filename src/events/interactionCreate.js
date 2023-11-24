const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
    name: 'interactionCreate',
    async execute(interaction){
      let client = interaction.client;
      if (!interaction.isCommand()) return;
      if (interaction.user.bot) return;
      try {
        const command = client.slashcommands.get(interaction.commandName)
        command.run(client, interaction)
      } catch (e) {
        console.error(e)
        interaction.reply({ content: "Erreur", ephemeral: true })
      }



      if (!interaction.isButton()) return;

      if (interaction.customId === 'close_ticket') {
          if (interaction.member.permissions.has('ADMINISTRATOR')) {
              await interaction.message.channel.delete();
          } else {
              interaction.reply({ content: 'Vous n\'avez pas la permission de fermer ce ticket.', ephemeral: true });
          }
      }
    }
  }