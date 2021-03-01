const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Kanal ${channel} kilidi açıldı.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Açan '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' kilidi açıldı.')
.setDescription(`Modların bu kanalın kilidini açması gerekiyordu.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kilit-aç','kilitaç','kanalkilidiaç','kanal-kilidi-aç'],
  permLevel: 0
};
 
exports.help = {
  name: 'unlock'
};