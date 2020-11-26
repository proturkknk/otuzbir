const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
const db = require('quick.db')

var plrs = [
  
]

exports.run = async (client, message) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}  
var filter = m => m.author.id === message.author.id;




        message.channel.send('✅ | **Çekilişin süresini belirle (Saniye: s, Dakika: m, Saat: h, Gün: d, Hafta: w)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']   
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('<a:basarisiz:596887378476400651> | **Böyle bir süre bilmiyorum :(**');
            duration = collected.first().content
            msg.channel.send('✅ | **Şimdi de ödülü yaz bakalım**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Ödül: ${title}** \n🎉'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username + "Adam asmaca bot.", message.author.avatarURL);
                  message.channel.send(' 🥳 **ÇEKİLİŞ BAŞLADI** 🥳' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
            .setFooter("(Adam asmaca Bot çekiliş sistemi)")
                       .addField('🎉 | Çekiliş Bitti !',`Kazanan : ${gFilter} \nBitiş zamanı :`)
                       .setTimestamp()
                     m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

                       var embedLel = new Discord.RichEmbed()
                        .setColor("random")
                        .setDescription(" ❤️ Ödülünü Moderatörleri Etiketleyerek Alabilirsin! ❤️ ").setFooter("Adam asmaca Bot Tüm hakları saklıdır.")
                    message.channels.send(`**🤩 Tebrikler ${gFilter}! \`${title}\` kazandın! 🤩**` , embedLel)
                }, ms(duration));
            });
                 
              });
            });
          });
        });
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    

  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};
