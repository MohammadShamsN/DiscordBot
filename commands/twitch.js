const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `<:instagram:832195695557607424> Twitch : https://twitch.tv/Z1ROXTV` ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};