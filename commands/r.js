const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `Salam Khedmate Hame Doostane Azize Server.
Lotfan Ghavanino Ba **Deghat** Motale'e Konid.


**1.** Spam Nakonid.

**2.** Bahse Siasi, Maz'habi Va Nezhad Parastane Mamnooe.

**3.** Be Hamdige Ehteram Bezarid Va Az Be Kar Bordane  Kalamate Rakik Khoddari Konid.

**4.** Az Ferestadane Payam Haye Naa-Marboot Dar Channel Haye Mokhtalef Khoddari Konid.

**5.** Ghavanin Har Channel Dakhale Topicesh Neveshte Shode Hatman Topice Har Channelo Motale'e Konid.

**6.** Baraye Member Haye Channel Mozahemat Injad Nakonid, Hatta Dar DM.

**7.** Tabligh Nakonid. Faghat Mojaz Be Gozashtane Link Haye Marboot Be Contente Khodetoon Hastid, Oonam Faghat Dar Channele **Promotion**.

**8.** Dar Morede Streamer Ha Va Youtuber Haye Dige Sohbat Nakonid.


Dar Soorati Ke Ghavanino Ra'ayat Nakonin, **Ba Shoma Barkhord Khahad Shod**.`

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};