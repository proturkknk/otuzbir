const Discord = require('discord.js');
const db = require('quick.db')

var gifs = [
  
  "https://tenor.com/view/aquaman-fuck-marvel-mcu-fuck-boys-gif-13612891",
  "https://tenor.com/view/bruh-bye-ciao-gif-5156041",
  "https://tenor.com/view/confused-what-nigga-please-really-loop-gif-4966361",
  "https://media.discordapp.net/attachments/755132729707724904/755132828966060102/a_df45711759095e85d3740fdf9ec7ff30.gif",
  "https://tenor.com/view/dick-penis-dildo-forest-running-gif-16272085", // .d
  "https://media.tenor.com/images/e0381c9ec6ee38b43a7979c8e6a4b83f/tenor.gif",
  "https://tenor.com/view/kermit-kermit-the-frog-bruh-smiling-drive-gif-15005835",
  "https://tenor.com/view/parrot-rock-on-ok-dude-gif-11803532",
  "https://tenor.com/view/will-smith-clap-yay-happy-hooray-gif-13226780",
  "https://tenor.com/view/discord-uwu-sweat-blush-gif-13566033",
  "https://tenor.com/view/minecraft-herobrine-touchmybutt-gif-9738422",
  "https://tenor.com/view/national-day-ilove-sg-hearts-gif-14735593",
  "https://tenor.com/view/happy-jumping-we-bear-bears-bare-animation-gif-13283426"

]

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
     let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  var random = Math.floor(Math.random()*gifs.length); // 0 ile gifin uzunluğu(13) arasında bir sayı tutar
  msg.reply("@bruh ")
  msg.channel.send(gifs[random]);
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bruh', 'BRUH', 'buruh','brh','bruhh','BR0H'],
  permLevel: 0
};

exports.help = {
  name: 'bruh',
  description: 'rasgele bruh gif atar',
  usage: 'bruh'
};