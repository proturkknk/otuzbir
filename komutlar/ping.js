const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args,) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl = message.author.avatarURL;
  const bayrak = ":flag_tr:";
  const ping = `${Math.round(client.ping)}ms`;

let embed = new Discord.RichEmbed()
.setTitle(':shield: Anlık Gecikme Süresi :shield:')
.setColor("#00FF00")
.addField("Ping :", ping)
.addField("Lokasyon :", bayrak)
.setFooter(useruser, userurl)
.setTimestamp();

message.channel.send(embed);

    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p","ping"],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gecikme süresini gösterir.',
  usage: 'ping'
};