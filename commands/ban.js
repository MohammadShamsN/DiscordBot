const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    if(!message.guild.members.cache.find(user => user.id == client.user.id).hasPermission('BAN_MEMBERS'))
      return message.reply("You don't have the permission to ban people bitch. Get the hell outa here.");
  
    if(!message.guild.me.hasPermission('BAN_MEMBERS'))
      return message.reply("I don't have the permission to ban. :(");
  
    const args = message.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
    const user = message.mentions.users.first();
    if(user == undefined)
        return message.reply("You need to mention the user!");
  
    const reason = args[2];
    if(reason == undefined)
        return message.reply("You need to specify a reason.");
  
    
    message.guild.members.ban(user.id)
        .then(kickInfo => message.reply(`Banned ${user}\nReason: ${reason}\nGet rekt bitch.`))
        .catch(console.error);
  
};
