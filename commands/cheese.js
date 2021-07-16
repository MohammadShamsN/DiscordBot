const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "https://Instagram.com/Z1ROXTV",
          "https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2Fezgif.com-gif-maker.gif?v=1626477813676"
        )
        .setColor("F93CCA")
        .setThumbnail("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2Fezgif-1-ec4f12649b22.gif?v=1626477877454")
    );
};