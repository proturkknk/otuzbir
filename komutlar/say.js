const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  let mesaj = msg.content.split(`${prefix}say`).join("");
    if(!mesaj) {
      msg.reply("**Yazacağım mesajı belirtmelisin!** :x:").then(m => m.delete(4500));
      return; 
    }
  msg.delete();
    msg.channel.send(mesaj);
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'bota istediğiniz şeyi söyletirsiniz',
  usage: 'say'
};