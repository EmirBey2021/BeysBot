const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`Mevcut Markettekiler: \n Telefon: 1999 (b!market Telefon)`)
  
  if (args[0] === 'Telefon') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1999 // istediğiniz fiyat
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "Aktif")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}