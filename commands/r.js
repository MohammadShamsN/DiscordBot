const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `Salam khedmate hame doostane azize server.
Lotfan ghavanino ba **deghat** motale'e konid.


**1.** Spam nakonid.

**2.** Bahse siasi, maz'habi va nezhad parastane mamnooe.

**3.** be hamdige ehteram bezarid va az be kar bordane  kalamate rakik khoddari konid.

**4.** Az ferestadane payam haye naa-marboot dar channel haye mokhtalef khoddari konid.

**5.** Ghavanin har channel dakhale topicesh neveshte shode hatman topice har channelo motale'e konid.

**6.** Baraye member haye channel mozahemat injad nakonid, hatta dar DM.

**7.** Tabligh nakonid. Faghat mojaz be gozashtane link haye marboot be contente khodetoon hastid, oonam faghat dar channele #promotion 

**8.** Dar morede streamer ha va youtuber haye dige sohbat nakonid.


Dar soorati ke ghavanino ra'ayat nakonin, **Ba shoma barkhord khahad shod**.`

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.channel.send(revised);
};