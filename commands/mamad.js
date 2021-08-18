const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `@Mamad79#7979 
   kire mamad = sadrasb`

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};