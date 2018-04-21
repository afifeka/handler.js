const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, color) => {

    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("**Anda tidak ada permission untu melakukan command ini!");
    if (!args[0] || args[0] == "help") return message.reply(`**Pakai : alu!setprefix <prefix baru>**`);
    
    let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("**Prefix Sudah Diterapkan!**")
    .setDescription(`Prefix Diubah Menjadi **${args[0]}**`);

    message.channel.send(embed);
}

exports.help = {
    name: "prefix",
    description: "Change your server prefix",
    usage: "suzu prefix <new prefix>"
}
