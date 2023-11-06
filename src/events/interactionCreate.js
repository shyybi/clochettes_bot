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
          // Vérifiez si l'utilisateur a les autorisations nécessaires pour fermer le ticket.
          if (interaction.member.permissions.has('ADMINISTRATOR')) {
              // Supprimez le salon de ticket.
              await interaction.message.channel.delete();
          } else {
              interaction.reply({ content: 'Vous n\'avez pas la permission de fermer ce ticket.', ephemeral: true });
          }
      }
    }
  }