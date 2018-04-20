const Discord = require("discord.js");
const randomNeko = require("fetch-subreddit");

exports.run = (bot, message, args) => {
    randomNeko()
    .then(url => {
        if (url.includes(".jpg" || ".png" || ".svg")) {
             var embed = new Discord.RichEmbed()
               .setTitle("URL")
               .setURL(url)
               .setColor("#0000FF")
               .setImage(url)
              message.channel.send({ embed: embed })
             return; 
        } else {
            return message.channel.send("Not the correct format came through. So I couldn't send you a picture of a dog");
        }
})};

exports.help = {
    name: "neko"
}