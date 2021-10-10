const { MessageEmbed } = require('discord.js');

module.exports = async (client, member) => {
  const guild = member.guild;
  // ----------------------- [Logging] -----------------------  
  var avatar = member.user.displayAvatarURL();
  
  const logMessage = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor(member.displayName, avatar, null) // user info
	.setDescription(member.user.tag + ' left the server.') // message
	.setThumbnail(avatar) // user profile
	.setTimestamp();

  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  if(channel == undefined)
      console.log('ERROR: Channel not found.')
    else
      channel.send(logMessage);
  // ---------------------------------------------------------
  
}