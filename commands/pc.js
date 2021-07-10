const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '💻 PC : GPU : ASUS-GTX1660TI-O6G /// CPU : Core i5 9400f /// RAM : 16GB DDR4 Geil /// Motherboard : Gigabyte B365 HD3 /// POWER : Cooler Master E 550 /// SSD : Western 240G /// HDD : Western 2TRA '

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};