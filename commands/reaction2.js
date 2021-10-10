const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
  channel.messages.cache.find(message=> message.id == '896721365095305267').then(message => message.edit("Khaste Nabashid!"));
};