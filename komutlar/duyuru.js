const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
        let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  let mesaj = msg.content.split(`${prefix}dm`).join("");
  if(msg.author.id !== "522834911732695041" && msg.author.id !== "459377860012933121") return msg.reply('**yetkililerden başka kimse kullanamaz!** :x:').then(m => m.delete(5000))
  if(!mesaj) return msg.reply("**Yazacağım mesajı belirtmelisin!** :x:").then(m => m.delete(4500))
  
  try{
    msg.guild.members.forEach(m => {
      if(!m.bot && m.id !== "756236928512295050") {
        m.send(mesaj)
      }
    })
    msg.channel.send('**duyuru başarılı!**')
  }catch(e) {
    msg.channel.send("Bir hata verdi: `"+e+"`")
  }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'herkese dm den mesaj yollar',
  usage: 'dm'
};