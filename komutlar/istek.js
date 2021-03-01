const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım: o!istek-kod Bence bunu bunu eklerseniz daha iyi olur')
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(':tada: **İstek Kodunuz başarıyla bildirildi!** ')
message.channel.send(embed)
const otaqu = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("İsteği", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('811226715488911360').send(otaqu); // Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'İstek-kod.',
    usage: 'otaqu'
}