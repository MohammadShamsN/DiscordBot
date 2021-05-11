const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `<:Instagram:736518226569068565> Instagram\ : https://Instagram.com/Z1ROXTV 
   Twitch\ : <:twitch:760587569879711844> https://Twitch.tv/Z1ROXTV 
   Youtube\ : <:YouTube:760587569385046098> https://www.youtube.com/channel/UCBKUnv2PAjeKqDpsgF2isbA
   Donate\ : <:peepoScammer:841789232535961640> https://dono.gg/z1roxtv 
   Telegram\ : <:Telegram:760587584220037160> https://t.me/Z1ROXTV 
   Twitter\ : <:NM_Twitter:735279288743624714> https://twitter.com/Z1ROXTV
   Discord\ : <:3702_party_discord:712764861997908040> https://discord.gg/FbcrFGmZkK`;
   
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
