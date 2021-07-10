const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `<:Youtube:841790561286357012>  Youtube : https://www.youtube.com/channel/UCBKUnv2PAjeKqDpsgF2isbA` ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};