const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
client.channels.cache.get(`848313858254962728`).fetchMessage(`892160224717307975`).then(msg => msg.delete());
};