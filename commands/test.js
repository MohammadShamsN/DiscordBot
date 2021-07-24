const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
  channel.send('<:Twitch:841790517460860968> : `Twitch`\n\n<:discord:841959253082374145> : `Discord`\n\n<:Youtube:841790561286357012> : `Youtube`\n\n<:Twitter:841790459239989248> : Twitter');
};