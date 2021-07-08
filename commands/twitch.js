const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `
   <:Twitch:841790517460860968> Twitch\ : https://Twitch.tv/Z1ROXTV` ;
   
  const revised = commands
    .split("\n")
    .map((x) => "• " + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Z1ROX Twitch",
        "https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-412aa3c82965%2F20210506_124716.png?v=1620738180348"
      )
      .setColor("00C6FF")
      .setTimestamp()
      .setDescription(revised)
  );
};
