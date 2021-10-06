const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
  channel.messages.cache.find(msg=> msg.id == '893815630074085406').then(msg => message.edit("Khaste Nabashid!"));
};