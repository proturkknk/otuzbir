const settings = require('../ayarlar.json');
const discord = require('discord.js')
const prefix = settings.prefix;
const axios = require('axios')
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  axios
  .get("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    const embed = new discord.RichEmbed()
  .setTitle("Kedi;")
  .setImage(res.data[0].url)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter("TREFAX' a özel yaplmıştır.")
  msg.channel.send(embed)
  })
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kedi','cat'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'KEDİĞĞĞĞĞ',
  usage: 'kedi'
};