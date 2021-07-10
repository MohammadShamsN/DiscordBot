const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
  `<:Twitch:841790517460860968> +Twitch
   <:Instagram:841790627549282435> +Instagram
   <:Youtube:841790561286357012> +Youtube
   <:Telegram:841790593037238335> +Telegram
   <:Twitter:841790459239989248> +Twitter
   <:discord:841959253082374145> +Discord
   <:peepoScammer:841789232535961640> +Donate
   📱 +SM
   💻 +PC
   🎙 +Mic 
   🎵 +MusicCommands ` ;
   
  const revised = commands
    .split("\n")
    .map((x) => "• " + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Z1ROX Help Commands",
        "https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-412aa3c82965%2F20210506_124716.png?v=1620738180348"
      )
      .setColor("00C6FF")
      .setTimestamp()
      .setDescription(revised)
  );
};