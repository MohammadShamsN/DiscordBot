const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '<:Instagram:841790627549282435> Instagram : https://Instagram.com/Z1ROXTV 

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};