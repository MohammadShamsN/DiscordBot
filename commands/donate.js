const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '<:peepoScammer:841789232535961640> Donate\ : https://dono.gg/z1roxtv'

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};