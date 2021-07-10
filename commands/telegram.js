const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
  '<:Telegram:841790593037238335> Telegram : https://t.me/Z1ROXTV' ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};