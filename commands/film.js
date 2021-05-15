const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `@everyone Farda Shab Saat 11:30 ( 1 **Shanbe** ) Film ***Wrath Of Man*** Ro Mibinim !!!` ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};