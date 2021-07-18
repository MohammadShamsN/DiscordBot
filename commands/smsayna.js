const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          `Saynasa Social Media`,
           "https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2F20210718_155407.gif?v=1626612977276"
        )
        .setColor("CD00FF")
        .setThumbnail("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FUntitled-22.png?v=1626609384085")
        .addField("<a:Twitch:866048118214230036> Twitch", "https://twitch.tv/saynsasa")
        .addField("<a:Insta:866274244131291156> Instagram", "https://instagram.com/sayna.twitch")
        .addField("<a:Twitter:866280731047100426> Twitter", "https://twitter.com/saynasaa")
        .addField("<a:Donate:866084777014984705> Donate", "https://dono.gg/saynasa")
    );
};