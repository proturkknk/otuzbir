const Discord = require('discord.js');
const db = require('quick.db')

const harfler = [
  'a',
  'A',
  'b',
  'B',
  'c',
  'C',
  'd',
  'D',
  'e',
  'E',
  'f',
  'F',
  'g',
  'G',
  'ğ',
  'Ğ',
  'ı',
  'I',
  'i',
  'İ',
  'j',
  'J',
  'k',
  'K',
  'l',
  'L',
  'm',
  'M',
  'n',
  'N',
  'o',
  'O',
  'ö',
  'Ö',
  'p',
  'P',
  'r',
  'R',
  'ş',
  'Ş',
  's',
  'S',
  't',
  'T',
  'u',
  'U',
  'ü',
  'Ü',
  'v',
  'V',
  'W',
  'w',
  'x',
  'X',
  'y',
  'Y',
  'z',
  'Z',
  '*',
  '-',
  'é',
  '!',
  '^',
  '+',
  '%',
  '&',
  '/',
  '(',
  ')',
  '=',
  '?',
  '_',
  '>',
  '£',
  '#',
  '$',
  '½',
  '{',
  '[',
  ']',
  '}',
  '\\',
  '|',
  ',',
  '`',
  ';',
  ':',
  '.',
  '<',
  '×',
  '⁰',
  '¹',
  '²',
  '³',
  '⁴',
  '⁵',
  '⁶',
  '⁷',
  '⁸',
  '⁹',
  '⅓',
  ''
]

exports.run = async (client, msg, args) => {
  let cool = true
  if(!cool) return
  if(cool) {
    cool = false
  }
  
  let kullanıcı = await db.fetch(`karaliste_${msg.author.id}`);
  if(kullanıcı) {
    cool = true
  }
  if(kullanıcı) return msg.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
  
  
  if(!args[0]) return msg.channel.send('**Doğru Kullanım: **`a!dürt @kullanıcı <dürtme sayısı>`')
  if(!args[1]) return msg.channel.send('**Doğru Kullanım: **`a!dürt @kullanıcı <dürtme sayısı>`')
  const kisi = msg.mentions.users.first();
  if(!kisi) return msg.reply('**Lütfen Bu Sunucuda Olan Birini Etiketleyin!** :x:')
  if(kisi.id == '756236928512295050') return msg.channel.send('Kendimi Dürtemem')
  let rakam = true
  harfler.forEach(harf => {
    if(args[1].includes(harf)) return rakam = false
  })
  if(!rakam) return msg.reply('**Girdiğiniz Değer Bir Sayı Değil!** :x:')
  if(args[1] > 9) return msg.reply('**Maximum Dürtme Sayısı: 9**')
  
  var i;
  for(i = 0; i < args[1]; i++) {
    kisi.send(kisi +  " " + msg.author.username + ' Seni Dürtüyor😵!')
  }
  msg.channel.send(kisi.username +  ' **Adlı Kullanıcı Direkt Mesajlardan Dürtüldü!**')
  
  setTimeout(function(){
    cool = true
  },2500)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dürt','durt','DURT','Durt','Dürt','DÜRT'],
  permLevel: 0
};

exports.help = {
  name: 'dürt',
  description: 'birini dürtersiniz.',
  usage: 'dürt'
};