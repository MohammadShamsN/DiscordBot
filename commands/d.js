const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
  'Discord : https://discord.gg/3Pu2QppU4n' ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};