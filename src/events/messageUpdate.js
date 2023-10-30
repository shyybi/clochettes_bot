const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "messageUpdate",
  once: false, // Retirez "once: true" pour exécuter l'événement chaque fois qu'un message est édité
  async execute(oldMessage, newMessage) {
    function updateMsg() {
      const userName = "Charlie!"; // Le compte de Charlie
      const userIcon ="https://cdn.discordapp.com/avatars/953256335854678067/179b62fa9d3c21e1fab4178dadc5f0f5";
      const logId = "1168548140496994425";
      const author = oldMessage.author;
      const content = oldMessage.content;
      const msgChan = oldMessage.channel.name;
      const newContent = newMessage.content;
      const logChann = oldMessage.guild.channels.cache.get(logId);

      const logMsg = new EmbedBuilder()
        .setColor(0xffe100)
        .setTitle("Message modifié")
        .addFields(
          { name: " ", value: " " },
          { name: "De l'utilisateur:", value: `${author}`, inline: true },
          { name: " ", value: " ", inline: true },
          { name: "Dans:", value: `#${msgChan}`, inline: true },
          { name: " ", value: " " },
          { name: " ", value: " " },
          { name: "Contenu", value: `${content}` },
          { name: "Nouveau", value: `${newContent}` },
          { name: " ", value: " " }
        )
        .setThumbnail("https://cdn.discordapp.com/avatars/1006183291864481873/40fd85bc6ef83af39ca8e6d08b6c619d")
        .setTimestamp()
        .setFooter({ text: `par ${userName}`, iconURL: `${userIcon}` });

      logChann.send({ embeds: [logMsg] });
    }

    updateMsg();
  },
};
