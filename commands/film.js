const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = 
   `@everyone : Name : Wrath Of Man

ژانر: اکشن – هیجان انگیز

محصول: انگلستان 2021

کارگردان: Guy Ritchie

بازیگران: Jason Statham, Niamh Algar, Josh Hartnett

خلاصه داستان: یک شخصیت سرد و مرموز در یک شرکت حمل و نقل  کار می کند و مسئول انتقال صدها میلیون دلار به لوس آنجلس است اما…شما می توانید با تماشای فیلم و سریال های جدید اوقات زیبایی را سپری کنید با ما همراه باشید
   https://cdn.discordapp.com/attachments/798169547454152704/843099738865795072/Wrath-of-Man-2021-4.jpg` ;

  const revised = commands
    .split("\n")
    .map((x) => x.trim())
    .join("\n");

message.sent(revised);
};