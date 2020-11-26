const Discord = require('discord.js');
const db = require('quick.db')

 exports.run = async (client, message, args) => {
   
   let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
   
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(message.author.avatarURL)
       .setTimestamp()
       .setFooter('Adam asmaca bot', message.author.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
   
     

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['o'],

  permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};