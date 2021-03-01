const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {

var egehanss = slots[Math.floor(Math.random() * slots.length)];
var egehanss2 = slots[Math.floor(Math.random() * slots.length)];
var egehanss3 = slots[Math.floor(Math.random() * slots.length)];

  if (egehanss === egehanss2 && egehanss === egehanss) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${egehanss} **:** ${egehanss2} **:** ${egehanss3}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${egehanss} **:** ${egehanss2} **:** ${egehanss3}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slot'],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
