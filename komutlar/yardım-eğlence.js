const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Eğlence Komutları - Beys Bot")
  .setDescription('')
  .setColor(0x00ffff)
  .addField('**Kullanıcı Komutları:**',' ```b!slot / b!yazıtura / b!efkarım / b!espri / b!yıldızsavaşı / b!elyazısı / b!emoji-yakalamaca / b!1vs1```')
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
  aliases: ['eğlence-y'],
  permLevel: 0
};
exports.help = {
  name: 'eğlence-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};