const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Moderasyon Komutları - Beys Bot")
  .setDescription('')
  .setColor(0x00ffff)
  .addField('**Yetkili Komutları:**',' ```b!ban / b!kick / b!banbilgi / b!reklam-engel / b!spam-engel-aç / b!spam-engel-kapat / b!küfür-engel / b!kilit / b!kilitaç / b!ses-sorgula / b!sicil / b!sicil-sıfırla / b!snipe / b!temizle / b!sayaç / b!otorol / b!sa-as / b!çekiliş / b!kayıt / b!kayıt-rol / b!slowmode / b!emoji-ekle```')
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
  aliases: ['moderasyon-y'],
  permLevel: 0
};
exports.help = {
  name: 'moderasyon-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};