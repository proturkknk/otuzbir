const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
 
//-----------------------------------------------\\
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://iyzuh.glitch.me/`);
}, 280000)
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} tane komut yükleniyor.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name} [Powered by; ensar].`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
let bounce = true
client.on('message', async (message) => {
  const channel = client.channels.find(channel => channel.id === '772890259335020614');
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  if(message.content.startsWith('a!yetkili')) {
    let kullanıcı = await db.fetch(`karaliste_${message.author.id}`);
  
  if(kullanıcı) return message.reply('**Kara liste algılandı! Bu komudu kullanamazsınız.** :x:')
    if(message.author.bot === true) return message.channel.send("bot üzerinden yetkili çağıramazsın :x:").then(x => x.delete(5000))
    if(message.author.id === "756236928512295050") return message.channel.send("bot üzerinden yetkili çağıramazsın :x:").then(x => x.delete(5000))
    if(!args[0]) return message.reply('linki ekle. Link olmazsa yöneticiler gelemez!')
    const link = args[0]
    var gerek = [
      "Https://",
      "discord.gg",
      "Discord.gg",
      "HTTPS://",
      "https://"
    ]
    if(!link.startsWith(gerek[1]) && !link.startsWith(gerek[2]) && !link.startsWith(gerek[3]) && !link.startsWith(gerek[4]) && !link.startsWith(gerek[5])) return message.reply('doğru bir link yaz!')
    if(link.startsWith('https://nolur.com')) return message.reply('bunu göndereceğimimi sandın?')
    if(!args[1]) return message.reply('probleminizi belirtin.')
    const problem = message.content.split(`${prefix}yetkili ${link}`).join("");
    const id = message.author.id
    const kanal = message.channel.id
    message.channel.send("mesajınız başarıyla iletildi.")
    channel.send("**Birinin yardıma ihtiyacı var!\n\ngönderen id; "+id+"\n\noda linki; "+link+"\n\noda id: "+kanal+"\n\nproblemleri; "+problem+"**")
    }
  if(message.content.toLowerCase() === "sa" || message.content.toLowerCase() === "selamın aleyküm" || message.content.toLowerCase() === "slm" || message.content.toLowerCase() === "selam" || message.content.toLowerCase() === "selamınaleyküm") {
    if(bounce) {
      bounce = false
      setTimeout(function() {
       message.reply("Aleykümselam Hoşgeldin 🤗🤗") 
      }, 500);
      setTimeout(function() {
       bounce = true
      }, 3000);
    }
  }
})

      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      console.log(`__Uptime:__\n${days}gün ${hours}saat ${minutes}dakika ${seconds}saniye`);

client.login(ayarlar.token);

client.on('guildCreate', guild => {

    let kanal = guild.channels.filter(c => c.type === "text").random()

    kanal.send(" TR Beni eklediğiniz için teşekkürler! Prefixim  a! EN Thanks for add me !,My Prefix is a!");

});
//eklenince mesaj atma 👆
