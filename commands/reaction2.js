const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
TextChannel.messages.cache.find(message => message.id == '892159019941261392').then(message => message.edit("Khaste Nabashid!"));
};