const { MessageEmbed } = require('discord.js');

module.exports = async (client, oldMessage, newMessage) => {
  const guild = oldMessage.guild;
  const member = oldMessage.member;
  
  // ----------------------- [Logging] ----------------------- 
  if(oldMessage.toString() === newMessage.toString()) return;
  var channel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  var avatar = member.user.displayAvatarURL();
    const logMessage = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(member.displayName, avatar, null) // user info
    .setDescription(`${member.user} edited message in ${oldMessage.channel}\n Old message: ${oldMessage}\nNew message: ${newMessage}`) // message
    .setThumbnail(avatar) // user profile
    .setTimestamp();

    if(channel == undefined)
        console.log('ERROR: Channel not found.')
      else
        channel.send(logMessage);
  // ---------------------------------------------------------
  
}