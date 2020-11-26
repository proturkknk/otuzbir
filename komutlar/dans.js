const Discord = require('discord.js');
const db = require('quick.db')

const harfler = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'Ğ',
  'I',
  'İ',
  'J',                                           
  'K',
  'L',
  'M',
  'N',
  'O',
  'Ö',
  'P',
  'R',
  'Ş',
  'S',
  'T',
  'U',
  'Ü',
  'V',
  'W',
  'Q',
  'X',
  'Y',
  'Z',
]

exports.run = async (client, msg) => {
  let oyuncu1p = 0;
    //Çıkan harf fonksiyonu
    let br = false
    while(oyuncu1p < 10) {
      if(br) {
        break
      }

      let harf = harfler[Math.floor(Math.random() * harfler.length)];

      await msg.channel.send('Harf: '+harf+' **2 saniye içinde yaz!**')

      const filter = res =>
      res.author.id === msg.author.id

      const answer = await msg.channel.awaitMessages(filter, {
        max: 1,
        time: 2000
      }).catch(() => {
        msg.reply('Süre doldu Puanın: '+oyuncu1p)
      })

      .then(collected => {
        if(collected.first().content.toUpperCase() == harf) {
          oyuncu1p = oyuncu1p + 1
          msg.channel.send('Doğru Harf! Puan: '+oyuncu1p)
        }else{
          msg.channel.send('Yanlış Harf! Puan: '+oyuncu1p)
          br = true
          return
        }
      })
      if(br) {
        break;
      }
      }

    msg.reply('Tebrikler! Oyun Bitti Puan: '+oyuncu1p)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dans','Dans','DANS','dons'],
  permLevel: 0
};

exports.help = {
  name: 'dans',
  description: 'dans',
  usage: 'dans'
};