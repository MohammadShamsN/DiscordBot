const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `<:Instagram:841790627549282435> Instagram\ : https://Instagram.com/Z1ROXTV 
   <:Twitch:841790517460860968> Twitch\ : https://Twitch.tv/Z1ROXTV 
   <:Youtube:841790561286357012> Youtube\ : https://www.youtube.com/channel/UCBKUnv2PAjeKqDpsgF2isbA
   <:peepoScammer:841789232535961640> Donate\ : https://dono.gg/z1roxtv 
   <:Telegram:841790593037238335> Telegram\ : https://t.me/Z1ROXTV 
   <:Twitter:841790459239989248> Twitter\ : https://twitter.com/Z1ROXTV
   <:Discord:841790487362928680> Discord\ : https://discord.gg/FbcrFGmZkK`;
   
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
