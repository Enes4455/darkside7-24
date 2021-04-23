const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "?"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('?yardım')
    console.log('Botumuz Aktif')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
//sa as başlangıç
client.on('message', message => {
if (message.content.toLowerCase() === "sa"){
if (message.member.id !== "778726788808704041") return message.reply('Aleyküm Selam Hoşgeldin :slight_smile:')
message.reply('Aleyküm Selam Hoşgeldin Sahip :slight_smile: ')
    }
});

client.on('message', message => {
if (message.content.toLowerCase() === "bb"){
if (message.member.id !== "778726788808704041") return message.reply('Görüşürüz :wave:')
message.reply('Görüşürüz sahip :wave:')

    }
});
///sa as son

///ban başlangıç
client.on('message', message => {
  if (!message.guild) return;
  const sebep = message.content.split(' ').slice(1)
  if (message.content.startsWith('?ban')) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('kanka yetkin yok yetkin olsa banlarım biliyon ama yok işte kanka')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: `${sebep} yüzünden sunucudan atıldın`,
          })
          if (!sebep) return message.reply('Sebebini yaz')
          .then(() => {
            message.channel.send(`${user.tag} kişisi ${sebep} yüzünden sunucudan atıldı`);
          })
          .catch(err => {

            message.reply('atılamadı');
            console.error(err);
          });
      } else {
        message.reply("atılamadı");
      }
    } else {
      message.reply("atılamadı");
    }
  }
});
///ban son
//kıck başlangıç
client.on('message', message => {
  if (!message.guild) return;
  const sebep = message.content.split(' ').slice(1)
  if (message.content.startsWith('?kick')) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('kanka yetkin yok yetkin olsa banlarım biliyon ama yok işte kanka')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick({
            reason: `${sebep} yüzünden sunucudan atıldın`,
          })
          if (!sebep) return message.reply('Sebebini yaz')
          .then(() => {
            message.channel.send(`${user.tag} kişisi ${sebep} yüzünden sunucudan atıldı`);
          })
          .catch(err => {

            message.reply('atılamadı');
            console.error(err);
          });
      } else {
        message.reply("atılamadı");
      }
    } else {
      message.reply("atılamadı");
    }
  }
});
//kıck
//yardım başlangıç

//yardım  son
//müzıkf


client.login('ODI2ODIzODkzMDcxMTY3NDg5.YGSFwQ._lu2kL0KRjAPhCNF_hgpiovmqOY')
