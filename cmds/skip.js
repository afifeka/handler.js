const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


module.exports.run = async (bot, message, args) => {
  if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
  if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
  serverQueue.connection.dispatcher.end('Skip command has been used!');
  return undefined;
}
module.exports.help = {
  name: "skip"
}
