	const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
    let member = message.mentions.users.first()
    let member2 = message.mentions.users.first(2);
  if(member.bot || member2.bot) return message.reply('Bot İle Aşk Yaşayamazsın')
  if(member.id === "756236928512295050") return message.reply('Bot İle Aşk Yaşayamazsın')
    var s = message.author
    if(member2) {
        var s = member2
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Bir Kişi Etiketlemelisin.`)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '💖'

            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Sonsuz aşk.`
    if(anasonuc < 100) {
        var yorum = '❤️Sonsuz Aşk❤️'
    }
var yorum = `💖Sonsuz aşk 💖.`
    if(anasonuc < 80) {
        var yorum = 'Biraz Daha Uğraşırsan Olacak.'
    }
    if(anasonuc < 60) {
        var yorum = 'Eh İşte Arada Trip Atıyor.'
    }
    if(anasonuc < 40) {
        var yorum = 'Az Da Olsa Bişeycikler Hissediyor Sana.'
    }
    if(anasonuc < 20) {
        var yorum = 'Maalesef Neredeyse İmkansız ama bi saçını tara.'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.username} Ve ${message.author.username} Arasındaki Aşk Sonucu.`)
        .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
    permLevel: 0
}
exports.help = {
    name: 'aşkölçer',
    description: 'İki Kullanıcı Arasındaki Aşkı Ölçer.',
    usage: 'aşkölçer [@Kullanıcı]'

}//kerem98#0098 tarafından yapılmıştır. WDEASGFDHASGFHJASGFH nys xd