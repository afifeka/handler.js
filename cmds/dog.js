const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (bot, message, args) =>  {
    randomPuppy()
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
    name: "dog"
}