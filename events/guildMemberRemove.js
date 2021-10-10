const { MessageEmbed } = require('discord.js');

module.exports = async (client, member) => {
  const guild = member.guild;
  console.log(member.user.avatarURL);
  console.log(member.user.displayAvatarURL);
  // ----------------------- [Logging] -----------------------  
  const logMessage = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor(member.displayName, member.avatarURL, null) // user info
	.setDescription(member.user.tag + ' left the server.') // message
	.setThumbnail(member.avatarURL) // user profile
	.setImage(member.avatarURL) // user profile
	.setTimestamp();

  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  if(channel == undefined)
      console.log('ERROR: Channel not found.')
    else
      channel.send(logMessage);
  // ---------------------------------------------------------
  
}