const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
    const args = message.content.slice((process.env.prefix).length).trim().split(/ +/g);
    const username = args[0];
    const user = client.users.cache.find(user => user.username == username);
    if(user == null)
        return client.send("User not found!");
  
    const reason = args[1];
    if(reason == null)
        reason = "";
  
  
};
