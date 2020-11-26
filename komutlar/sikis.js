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
  
  let plr = msg.mentions.users.first();
  if(!plr) return msg.reply("kimi s2cen onu etiketle!").then(m => m.delete(3000))
  if(msg.author.id === plr.id) return msg.channel.send("kendinimi s2cen gay")
  if(plr.id === "756236928512295050") return msg.reply("adam asmaca botunu kimse s2emez!")
  const embed = new Discord.RichEmbed()
.setTitle("**"+plr.username.toUpperCase()+" KOŞ! "+msg.author.username.toUpperCase()+" SENİ SİKMEYE GELİYOR!**")
.setColor('RANDOM')
.setImage("https://cdn.glitch.com/916fa858-7a79-4251-995e-8d8b4c8cc13a%2Ftenor.gif?v=1604345996974")
  msg.channel.send({embed})
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sik'],
  permLevel: 0
};

exports.help = {
  name: 'sik',
  description: 'birini sikersiniz',
  usage: 'sik'
};