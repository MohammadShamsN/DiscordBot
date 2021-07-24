const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '<:Twitch:841790517460860968> : ```Twitch```' ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};