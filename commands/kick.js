const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
      return message.reply("You don't have the permission to kick people bitch. Get the hell outa here.");
  
    if(!message.guild.me.hasPermission('BAN_MEMBERS'))
      return message.reply("I don't have the permission to kick. :(");
  
    const args = message.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
    const user = message.mentions.users.first();
    if(user == undefined)
        return message.reply("You need to mention the user!");
  
    const reason = args[2];
    if(reason == undefined)
        return message.reply("You need to specify a reason.");
  
    message.guild.members.kick(user, reason)
        .then(kickInfo => message.reply(`Kicked ${user}\nReason: ${reason}`))
        .catch(console.error);
  
};
