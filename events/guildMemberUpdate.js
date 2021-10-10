const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldMember, newMember) => {
  const guild = oldMember.guild;
  
  // ----------------------- [Logging] ----------------------- 
  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  var avatar = oldMember.user.displayAvatarURL();
  
    const logMessage = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(oldMember.displayName, avatar, null) // user info
    .setDescription(`${oldMember.user} updated.`) // message
    .setThumbnail(avatar) // user profile
    .setTimestamp();

    if(channel == undefined)
        console.log('ERROR: Channel not found.')
      else
        channel.send(logMessage);
  // ---------------------------------------------------------
  
}