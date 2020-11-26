const { get } = require('snekfetch');
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
     let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  const espri = await get('https://api.emirkabal.com/espri')
  if (!espri || !espri.body || !espri.body.mesaj) return console.log("Bir hata oluştu.");
    const embed = new Discord.RichEmbed()
  .setTitle(espri.body.mesaj)
  .setAuthor("Espri;",message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter('naber?.d')
  message.channel.send(embed)
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};