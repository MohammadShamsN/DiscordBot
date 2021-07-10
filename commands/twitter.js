const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `<:Twitter:841790459239989248> Twitter : https://twitter.com/Z1ROXTV`

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};