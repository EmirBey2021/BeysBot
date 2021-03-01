const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Bilgi - Beys Bot")
  .setDescription('')
  .setColor(0x00ffff)
  .addField('**Website**','[BURAYA TIKLA](https://bit.ly/beysbot)')
  .addField('**Davet Et!**','[BURAYA TIKLA!](https://discord.com/oauth2/authorize?client_id=810962049902575646&scope=bot&permissions=8)') 
  .addField('**Destek Sunucusu**','[BURAYA TIKLA!](https://discord.gg/WzHPKZ6VVK)')
  .setFooter('Yapımcı - Egehanss')
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
  aliases: ['davet', 'web', 'destek', 'b'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bilgi',
  usage: ''
};