const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = ` :instagram: Instagram\ : https://Instagram.com/Z1ROXTV 
   Twitch\ : https://Twitch.tv/Z1ROXTV 
   Youtube\ : https://www.youtube.com/channel/UCBKUnv2PAjeKqDpsgF2isbA
   Donate\ : https://dono.gg/z1roxtv 
   Telegram\ : https://t.me/Z1ROXTV 
   Twitter\ : https://twitter.com/Z1ROXTV`;
   
  const revised = commands
    .split("\n")
    .map((x) => "• " + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Z1ROX Social Media",
        "https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-412aa3c82965%2F20210506_124716.png?v=1620738180348"
      )
      .setColor("00C6FF")
      .setTimestamp()
      .setDescription(revised)
  );
};
