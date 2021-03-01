const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {


let embed = new Discord.MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter('Egehanss').setColor('GREEN')
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(embed.setDescription(`Bu komutu kullanabilmek için **"Kanalları Yönet"** yetkisine sahip olman gerekiyor.`))

  let miktar = Number (args[0])
 
if(isNaN(miktar)) return message.channel.send(':x: **Geçersiz sayı.**')
 
  message.channel.setRateLimitPerUser(miktar)
  message.react("✅")
  message.channel.send('Tamamdır! Slowmodeyi ayarladım.')


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yavaşmod','yavaş-mode','slow-mode'],
  permLevel: 0
};

exports.help = {
  name: 'slowmode',
  description: '',
  usage: ''
};