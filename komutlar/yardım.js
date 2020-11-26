const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const db = require('quick.db')
require("moment-duration-format");

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
    
    const embed = new Discord.RichEmbed()
    .setTitle('DM GRUBU BOTU')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription('**Komutlar;**')
    .setColor('RANDOM')
    .setFooter('ENSAR,KEREM,TREFAX')
    .setTimestamp()
    .setURL('https://nolur.com')
    .setThumbnail(msg.author.avatarURL)
    .addField('a!ping','Botun Pingini Ölçer🏓')
    .addField('a!adamasmaca','adam asmaca oynarsınız😵')
    .addField('a!bruh','Rastgele bruh gif atar😳')
    .addField('a!oylama','oylama yaparsınız📊')
    .addField('a!token','Botun tokenini alırsınız😉')
    .addField('a!say','bota herhangi bişey söyletirsiniz💬')
    .addField('a!avatar','yazan kişinin avatarını gösterir📰')
    .addField('a!düello','Etiketleniğiniz kişiyle Düello yaparsınız🔫')
    .addField('a!yetkili','Grubunuza yetkili çağırır🛃')
    .addField('a!kedi','Rastgele kedi gif atar😻')
    .addField('a!skin','mc skin isminin avatarını atar🔎')
    .addField('a!espri', 'Rastgele Espri Yapar😂')
    .addField('a!şifre','Belirtilen uzunlukta Şifre Oluşturur📜')
    .addField('a!dans', '2 saniyede harf yazabilirmisin?👀')
    .addField('a!speedtest','hız testi yapar🏃‍♀️')
    .addField('a!piyango','Piyangoyu Tutturabilirmisin?🤑💸')
    .addBlankField()
    
    msg.channel.send(embed)
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'yardim', 'yardım menüsü', 'help'],
  permLevel:0
};

exports.help = {
  name: 'yardım',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};