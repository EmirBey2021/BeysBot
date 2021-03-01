const Discord = require('discord.js');

exports.run = function(client, message, args) {
 
  if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(` Bu komutu kullanabilmek için "**Emojileri Yönet**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let [westralink, westraad] = args.join(" ").split(" - ");
  if (!westralink) return message.channel.send(` Bir link yazmalısın.`)
  if (!westraad) return message.channel.send(` Bir isim yazmalısın.`)
 
  guild.createEmoji(westralink, westraad)
    .then(emoji => message.channel.send(` ${emoji.name} adında emoji başarıyla oluşturuldu. (${emoji})`))
    .catch(console.error);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 3
};

exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emojiyükle <link> - <isim>'
};