const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = "<:Instagram:841790627549282435> Instagram : https://Instagram.com/Z1ROXTV "
  "<:Twitch:841790517460860968> Twitch : https://Twitch.tv/Z1ROXTV"
  " <:Youtube:841790561286357012> Youtube : https://www.youtube.com/channel/UCBKUnv2PAjeKqDpsgF2isbA"
 "  <:peepoScammer:841789232535961640> Donate : https://dono.gg/z1roxtv "
  " <:Telegram:841790593037238335> Telegram : https://t.me/Z1ROXTV "
   "<:Twitter:841790459239989248> Twitter : https://twitter.com/Z1ROXTV"
  " <:discord:841959253082374145> Discord : https://discord.gg/FbcrFGmZkK" ;
   
  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");
    
  message.channel.send(revised);
  };
