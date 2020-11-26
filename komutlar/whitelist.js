const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    if(message.channel.type == 'dm') return message.channel.send('**Bu Komudu DM lerde Kullanamazsın** :x:')//yaw sg >:(
    
    if ( message.author.id != "522834911732695041" && message.author.id != "459377860012933121" ){
   message.channel.send("**Bu komutu kullanmak için yetkiniz yok!!**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.reply('**Lütfen Kullanıcı ID si giriniz.** :x:')
    if(!args[0].startsWith(0) && !args[0].startsWith(1) && !args[0].startsWith(2) && !args[0].startsWith(3) && !args[0].startsWith(4) && !args[0].startsWith(5) && !args[0].startsWith(6) && !args[0].startsWith(7) && !args[0].startsWith(8) && !args[0].startsWith(9)) return message.reply('**Lütfen Kullanıcı ID si giriniz.** :x:') 
  db.delete(`karaliste_${nesne}`)
   message.channel.send(" :tada: Başarılı. :thumbsup: `" + nesne + "` id li kullanıcı artık botu kullanabilir.")
  }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
   
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['beyazliste','whitelist','beyaz liste','white list'],
    permLevel: 0
}

exports.help = {
    name: 'whitelist',
    description: '',
    usage: 'whitelist'
}