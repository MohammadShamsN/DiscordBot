const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;

message.channels.get('848313858254962728').fetchMessage('892160224717307975').edit('New Content')
};