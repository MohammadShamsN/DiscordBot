const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Socials",
          "https://cdn.discordapp.com/attachments/787804906006380605/865689028644175923/371903520_SOCIAL_ICONS_TRANSPARENT_400px.gif"
        )
        .setThumbnail("https://cdn.discordapp.com/attachments/787804906006380605/865689467850588180/tenor_1.gif")
    );
};