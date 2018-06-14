const Discord = require("discord.js"); // [package required: discord.js]

exports.run = async (bot, message, args, level) => {
  // EMBED
  let embed = new Discord.RichEmbed()
  .setColor("#ff1d00")
  .setTitle("Bot is shutting down!")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down

  // you can always leave out this code // (cmd part)
  bot.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); 

  
  process.exit(1);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["boot off", "shutdown"],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Owner",
  description: "Shuts down the bot, unless running under pm2 or on an VPN/VPS bot will reboot automatically",
  usage: "reboot"
};
