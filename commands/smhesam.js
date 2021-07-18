const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
      new MessageEmbed()
        .setAuthor(
          `Erph Social Media`,
           "https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2F20210718_015659.gif?v=1626562688157"
        )
        .setColor("000000")
        .setThumbnail("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FADL.PNG?v=1626609399316")
        .addField("<a:Twitch:866048118214230036> Twitch", "https://twitch.tv/hesamadl")
        .addField("<a:Insta:866274244131291156> Instagram", "https://instagram.com/hesamadl")
        .addField("<a:Donate:866084777014984705> Donate", "https://reymit.ir/HesamADL")
    );
};