module.exports = {
    name: 'interactionCreate',
    execute: (interaction) => {
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
    }
  }