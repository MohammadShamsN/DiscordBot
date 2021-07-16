const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          `twitch\ : https://twitch.tv/erph
           youtube\ : https://youtube.com/channel/UC26xLsVUPrKvRZJdjNehBRg
         Instagram\ : https://instagram.com/erphhh/`,
          "https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FPicsArt_07-14-11.31.46.png?v=1626479060804"
        )
        .setColor("F93CCA")
        .setThumbnail("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FPicsArt_07-14-11.31.46.png?v=1626479060804")
    );
};