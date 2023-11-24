const { EmbedBuilder } = require('discord.js') 
module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute(member, client) {
        // Trouver le canal où vous souhaitez envoyer le message de bienvenue
        const channel = member.guild.channels.cache.find(chnl => chnl.id === '1165921210031419453');

        const Goodbye = new EmbedBuilder()
            .setColor('#ca5cdd')
            .setTitle('Oh a new Traveler !')
            .setDescription(`Welcome the server ${member} !` )
            .setImage('https://cdn.discordapp.com/attachments/1035693937383452775/1169637329095377066/anime-welcome.png?ex=655620a6&is=6543aba6&hm=b3427b8d4390fba564962f79fb16449699987ec2aeb3bc30449ba15aedac6006&')
            
        // Envoyer un message de bienvenue
        channel.send({ embeds: [Goodbye] });
    },
};
