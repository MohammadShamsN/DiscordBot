const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          `Erph Social Media`,
           "https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2F20210718_015659.gif?v=1626562688157"
        )
        .setColor("000000")
        .setThumbnail("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FPicsArt_07-14-11.31.46.png?v=1626479060804")
        .addField("<a:Twitch:866048118214230036> Twitch", "https://twitch.tv/erph")
        .addField("<a:Insta:866274244131291156> Instagram", "https://instagram.com/erphhh/")
        .addField("<a:Youtube:866275611781103647> Youtube", "https://youtube.com/channel/UC26xLsVUPrKvRZJdjNehBRg")
        .addField("<a:Donate:866084777014984705> Donate", "https://reymit.com/erph")
    );
};