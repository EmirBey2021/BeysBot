const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Genel Komutlar - Beys Bot")
  .setDescription('')
  .setColor(0x00ffff)
  .addField('**Kullanıcı Komutları:**',' ```b!istek / b!bilgi / b!davet / b!destek / b!web / b!afk / b!yılbaşı / b!istatistik / b!sunucuresmi / b!kullanıcıbilgi / b!sunucubilgi / b!corona / b!banner / b!gel / b!git```')
  .setFooter('')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genel-y'],
  permLevel: 0
};
exports.help = {
  name: 'genel-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};