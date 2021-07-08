const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `<:Twitch:841790517460860968> Twitch\ : https://Twitch.tv/Z1ROXTV` ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};