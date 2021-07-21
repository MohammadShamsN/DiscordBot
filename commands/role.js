const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   '<:instagram:832195695557607424> : ```Risk```' 
   '<:instagram:832195695557607424> : ```Rust```' 
   '<:instagram:832195695557607424> : ```GTAV```' 
   '<:instagram:832195695557607424> : ```Fortnite```';

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
}; 