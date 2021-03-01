const Discord = require("discord.js");
const chancejs = require("chance");
const chance = new chancejs();

const cevaplar = ["**YAZI-TURA**: __TURA__", "**YAZI-TURA**: __YAZI__"];

exports.run = function(client, message) {

var FwhyCode2 = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (FwhyCode2 === "**YAZI-TURA**: __YAZI__") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(FwhyCode2)
      .setThumbnail(
        "https://i.hizliresim.com/qANl5V.png"
      );

return message.channel.send(EmbedFwhyCode);

  } else if (FwhyCode2 === "**YAZI-TURA**: __TURA__") {

    const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(FwhyCode2)
      .setThumbnail(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSczdZXv4B6JLrGS8j7Fvo_rmAYIIhmAjJ4A&usqp=CAU"
      );

return message.channel.send(EmbedFwhyCode);

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-tura'],
  permLevel: 0
};

exports.help = {
  name: "yazıtura",
  description: "Yazı-Tura atar.",
  usage: "yazıtura"
};
