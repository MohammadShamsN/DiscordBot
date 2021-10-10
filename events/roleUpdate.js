const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldRole, newRole) => {
  const guild = oldRole.guild;
  const member = oldRole.member;
  // ----------------------- [Logging] ----------------------- 
  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  var avatar = member.user.displayAvatarURL();
    const logMessage = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(member.displayName, avatar, null) // user info
    .setDescription(`${member.user}'s role got updated:`) // message
    .setThumbnail(avatar) // user profile
    .setTimestamp();

    if(channel == undefined)
        console.log('ERROR: Channel not found.')
      else
        channel.send(logMessage);
  // ---------------------------------------------------------
  
}