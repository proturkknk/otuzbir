const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
   var oyun = [
        "🤩 Adam asmaca 🤩",
        "📲 prefixim a! 📲",  
        "🤗 200Den fazla Kelime! 🤗",
        "👌 Sürüm: 3.1.0 👌",
        "✨ Dm gurubu bot ✨",
        "🤗Özelden gurubunuzun linkini atın hemen gireyim !🤗 ",
        "🙌İyi Eğlenceler🙌"
  
    ];22

    setInterval(function() {

        var random = Math.floor(Math.random()*oyun.length);
      client.user.setStatus("dnd");
        client.user.setActivity(oyun[random], {type: "listening"});
        }, 2 * 2500);
}