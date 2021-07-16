const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  send(
      new MessageEmbed()
        .setAuthor(
          "",
          "https://img.icons8.com/color/2x/cd--v3.gif"
        )
        .setThumbnail('')
    );
};