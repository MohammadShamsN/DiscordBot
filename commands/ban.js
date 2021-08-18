const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    if(!message.guild.members.cache.find(user => user.id == client.user.id).hasPermission('BAN_MEMBERS'))
      return message.reply("You don't have the permission to ban people bitch. Get the hell outa here.");
  
    /*if(!message.guild.me.hasPermission('BAN_MEMBERS'))
      return message.reply("I don't have the permission to ban. :(");
  
    const args = message.content.slice((process.env.prefix).length).trim().split(/ +/g);
    const username = args[0];
    const user = client.users.cache.find(user => user.username == username);
    if(user == null)
        return message.reply("User not found!");
  
    const reason = args[1];
    if(reason == null)
        reason = "";
  
    
    message.guild.members.ban(user.id)
        .then(kickInfo => console.log(`Banned ${user}`))
        .catch(console.error);*/
  
};
