const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
  channel.messages.cache.find(message => message.id == '893815630074085406').then(message => message.edit("Khaste Nabashid!"));
};