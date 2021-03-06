const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
  const guild = message.guild;
  const member = message.member;
  // ----------------------- [Logging] ----------------------- 
  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  var avatar = member.user.displayAvatarURL();
    const logMessage = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(member.displayName, avatar, null) // user info
    .setDescription(`${member.user} deleted message in ${message.channel}: ${message}`) // message
    .setThumbnail(avatar) // user profile
    .setTimestamp();

    if(channel == undefined)
        console.log('ERROR: Channel not found.')
      else
        channel.send(logMessage);
  // ---------------------------------------------------------
  
}