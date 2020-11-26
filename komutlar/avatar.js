const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  const target = msg.mentions.users.first();
  if(target) {
    try{
      const bruh = new Discord.RichEmbed()
.setTitle(`**${target.username} adlı kullanıcının avatarı**`)
.setColor('RANDOM')
.setImage(target.avatarURL)
  msg.channel.send({bruh})
    }catch(error){
      msg.channel.send(`hata: ${error}`)
    }
  }else{
     const embed = new Discord.RichEmbed()
.setTitle("**Avatarınız**")
.setColor('RANDOM')
.setImage(msg.author.avatarURL)
  msg.channel.send({embed}) 
  }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatarınızı gösterir',
  usage: 'avatar'
};