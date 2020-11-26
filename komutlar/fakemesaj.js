const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen Birisini Etiketler Misin ? :x:')
    let yazi = args.slice(1).join(' ')
    if (!yazi) return message.reply('Lütfen Mesajınızı Yazınız .')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete() // delete yazarsan yazıp siler.
        })
        .catch(console.error))
        .catch(console.error);
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: `fakemesaj`,
    description: 'Fake Bot Mesajı Gönderir .',
    usage: 'fakemesaj',
  category: `Kullanıcı`
};