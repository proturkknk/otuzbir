const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, msg, args) => {
  
  let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
       var flip = Math.random();
  const kaybetmeoranı = "0.50" // burdaki sayı 0.00 gibi 3 tane rakam ve 1 tane . dan oluşmalıdır yoksa ihtimal hesaplanmaz! (yarım = %50 = 0.5 = 0.50) NOT: nekadar az yaparsan ihtimal okadar fazla olur! need = kaybetme oranı
  const oran = (Math.pow(10, (kaybetmeoranı.length - 2))) - kaybetmeoranı * (Math.pow(10, (kaybetmeoranı.length - 2)))
       if (flip >= kaybetmeoranı) {
    let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
    .setDescription(`**Piyango tuttu! Hayatındaki tüm şansı kullanmış olabilirsin dostum.**`)
    .setFooter('Kazanma Oranı: %' + oran)
    .setTimestamp()
   .setImage('https://cdn.glitch.com/916fa858-7a79-4251-995e-8d8b4c8cc13a%2Ftenor%20(1).gif?v=1606312636468')
   msg.channel.send(embed);
 }else{
   let embed = new Discord.RichEmbed()//ve işey dicem bunda kara liste algılandı Y0K koyayım olr azaltma la :D :D :D :D
   .setColor('RANDOM')
    .setDescription(`**MPİ ye göre tutturamadın :(**`)
   .setFooter('Kazanma Oranı: %' + oran)
   .setTimestamp()
   .setImage('https://media.giphy.com/media/3oFzmko6SiknmpR2NO/giphy.gif')
   msg.channel.send(embed);
 }
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['piyangoçek','piyango','PİYANGO','Piyango'],
  permLevel: 0
};

exports.help = {
  name: 'piyango',
  description: 'Piyango çekersin.',
  usage: 'piyango'
};