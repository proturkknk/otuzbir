const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.users.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('**bir oyuncu adı belirtmelisin** :x:').then(m => m.delete(5000))
 if (mesaj == member) {
    message.reply('**kullanıcı değil, bir oyuncu adı belirtmelisin** :x:').then(m => m.delete(5000))
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcskin','skin','mc'],
 permLevel: 0,
};

exports.help = {
 name: 'mcskin',
 description: 'mc skini fotosunu atar',
 usage: 'mcskin'
};