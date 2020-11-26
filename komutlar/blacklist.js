const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    if ( message.author.id != "522834911732695041" && message.author.id != "459377860012933121" ){
   message.channel.send("**Bu komutu kullanmak için yetkiniz yok!!**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.reply('**Lütfen Kullanıcı ID si giriniz.** :x:')
    if(!args[0].startsWith(0) && !args[0].startsWith(1) && !args[0].startsWith(2) && !args[0].startsWith(3) && !args[0].startsWith(4) && !args[0].startsWith(5) && !args[0].startsWith(6) && !args[0].startsWith(7) && !args[0].startsWith(8) && !args[0].startsWith(9)) return message.reply('**Lütfen Kullanıcı ID si giriniz.** :x:') 
  db.set(`karaliste_${nesne}`, 'aktif')
      const engel = new Discord.RichEmbed()
    .setTitle("Kara Liste")
    .setColor("RANDOM")
    .setDescription(":ballot_box_with_check: Kara Liste Aktif. `" + nesne + "` id li kullanıcı artık botu kullanamayacak.")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField("Kara Listeye Alınan ||terbiyesiz||ID: ", nesne)
   message.channel.send(engel)
    }
    
  }   
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karaliste','blacklist','kara liste','black list'],
  permLevel: 0
};

exports.help = {
  name: 'karaliste',
  description: '',
  usage: 'karaliste'
};