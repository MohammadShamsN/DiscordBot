const { MessageEmbed } = require('discord.js');

module.exports = async (member) => {
  
  // ----------------------- [Logging] -----------------------
  var channel = process.env.LOG_CHANNEL;
  
  const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org') // user info
	.setDescription('Some description here') // message
	.setThumbnail('https://i.imgur.com/AfFp7pu.png') // user profile
	.setImage('https://i.imgur.com/AfFp7pu.png') // user profile
	.setTimestamp();

  channel.send({ embeds: [exampleEmbed] });
  // ---------------------------------------------------------
  
}