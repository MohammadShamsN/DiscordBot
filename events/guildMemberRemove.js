const { MessageEmbed } = require('discord.js');

module.exports = async (client, member) => {
  const guild = member.guild;
  
  // ----------------------- [Logging] -----------------------  
  const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor(member.displayName, member.avatarURL, null) // user info
	.setDescription(member.user.tag + ' left the server.') // message
	.setThumbnail(member.avatarURL) // user profile
	.setImage(member.avatarURL) // user profile
	.setTimestamp();

  guild.channels.fetch(process.env.LOG_CHANNEL_ID).then(channel => {
    if(channel == undefined)
      console.log('ERROR: Channel not found.')
    else
      channel.send({ embeds: [exampleEmbed] });
  })
  // ---------------------------------------------------------
  
}