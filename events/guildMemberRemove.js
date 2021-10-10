const { MessageEmbed } = require('discord.js');

module.exports = async (member) => {
  const guild = member.guild;
  
  // ----------------------- [Logging] -----------------------
  var channel = ;
  
  const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor(member.displayName, member.avatarURL, null) // user info
	.setDescription(member.user.tag + ' left the server.') // message
	.setThumbnail(member.avatarURL) // user profile
	.setImage(member.avatarURL) // user profile
	.setTimestamp();

  channel.send({ embeds: [exampleEmbed] });
  // ---------------------------------------------------------
  
}