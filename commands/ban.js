const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
    if(!message.guild.members.cache.find(client.user.id).hasPermission('BAN_MEMBERS'))
      return client.send("You don't have the permission to ban people bitch. Get the hell outa here.");
  
    if(!message.guild.me.hasPermission('BAN_MEMBERS'))
      return client.send("I don't have the permission to ban. :(");
  
    const args = message.content.slice((process.env.prefix).length).trim().split(/ +/g);
    const username = args[0];
    const user = client.users.cache.find(user => user.username == username);
    if(user == null)
        return client.send("User not found!");
  
    const reason = args[1];
    if(reason == null)
        reason = "";
  
    var kickInfo = {
      
    };
    message.guild.members.ban(user.id)
        .then(kickInfo => console.log(`Banned ${kickInfo.user?.tag ?? kickInfo.tag ?? kickInfo}`))
        .catch(console.error);
  
};
