const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  const args = msg.content.slice(prefix.length).trim().split(' ');
  if(msg.author.id === "522834911732695041" || msg.author.id === "459377860012933121") {
   if(!args[1]) return msg.reply('kanal id yazın!')
  let kanal = args[1]
  if(!args[2]) return msg.reply('mesajınızı yazın!')
  const channel = client.channels.find(channel => channel.id === kanal);
  const mesaj = msg.content.split(`${prefix}ileti ${kanal}`).join("");
  
  try{
    channel.send(`yetkiliden bir mesaj var: **${mesaj}**`)
    msg.channel.send('mesaj iletildi!')
  }catch(e) {
    msg.channel.send(':x: **id yanlış** :x:')
  }
  }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ileti'],
  permLevel: 0
};

exports.help = {
  name: 'ileti',
  description: 'yetkili komudu ile biri bişey istediği zaman kanal id ile onlara geri dönüş yapabilirsiniz',
  usage: 'ileti'
};