const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '🎙 Mic : BM-800 Condenser Microphone + Phantom Power BM-800'

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.reply(revised);
};