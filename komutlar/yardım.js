const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Komutlar - Beys Bot")
  .setDescription('[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=810962049902575646&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.com/invite/WzHPKZ6VVK) | [WebSite](https://bit.ly/beysbot) | [YouTube](https://www.youtube.com/channel/UCj0lY_NCid-7U845FfIjqjQ/videos?disable_polymer=1)')
  .setColor(0x00ffff)
.addField('• Bildiri','`b!istek` komutu ile hem bildiri gönderebilirsiniz. Hemde isteklerinizi iletebilirsiniz!')
.addField("• Yardım Menüleri","[b!eğlence-yardım](https://bit.ly/beysbot) → Eğlence Menüsü \n[b!genel-yardım](https://bit.ly/beysbot) → Genel Menüsü \n[b!ekonomi-yardım](https://bit.ly/beysbot) → Ekonomi Menüsü \n[b!moderasyon-yardım](https://bit.ly/beysbot) → Moderasyon Menüsü \n[b!müzik-yardım](https://bit.ly/beysbot) → Müzik Menüsü ")
 .addField("• Güncellemeler [18.02.2021 - 01.03.2021]","- Yıldız Savaşı Eklendi. \n- El Yazısı Eklendi. \n- Emoji Yakalamaca Eklendi. \n- Emoji Ekle Eklendi. \n- 1vs1 Eklendi. \n- Sunucu Bilgi Eklendi. \n- Adam Asmaca Eklendi.")
  .setFooter('Egehanss#8155 Tek Geliştiricidir.')
  .setImage('https://dummyimage.com/2000x500/33363c/ffffff&text=Beys')
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};