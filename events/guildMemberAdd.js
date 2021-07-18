const { createCanvas, loadImage, Canvas } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = async (client, member) => {
  const guild = member.guild;
  if(!guild || !guild.available) return console.log('Guild is not available!');

  const channel = guild.channels.cache.get(process.env.WLC_CHNL_ID);
  if(!channel) return console.log('Channel not found!');

    const canvas = createCanvas(750, 400);
    const ctx = canvas.getContext('2d');

    // Background image
    const background = await loadImage("https://cdn.glitch.com/88d04f2d-1085-4493-a223-9abd169835de%2FPicsArt_07-15-01.10.49.jpg?v=1626383611754");
    ctx.drawImage(background, 0, 0, 750, 400);

    // Text
    ctx.fillStyle = '#000000'
    ctx.font = '35px sans-serif';
    let text = `@${member.user.tag}`;
    let x = canvas.width / 2 - ctx.measureText(text).width / 2;
    ctx.fillText(text, x, 300);

    // MemberCount
    ctx.fillStyle = '#000000';
    ctx.font = '25px sans-serif';
    let text2 = `Member#${guild.memberCount}`;
    let x2 = canvas.width / 2 - ctx.measureText(text2).width / 2;
    ctx.fillText(text2, x2, 340);
  
    // User avatar image
    ctx.beginPath();
    ctx.arc(375, 190, 70, 0, Math.PI*2, true);
    ctx.clip();
    ctx.closePath();
    ctx.stroke();

    const avatar = await loadImage(member.user.displayAvatarURL({
      format: 'png',
    }));
    ctx.drawImage(avatar, 300, 115, 150, 150);
  
    let wlcmsgs = ['text 0',
                  ', Welcome To Goodarzi Fam',
                  ', joined the party.',
                  ', just showed up!',
                  ', just landed.',
                  ', is here.',
                  ', hopped into the server.',
                  ', We hope you brought pizza.',
                  'text 8',
                  'text 9',
                  'text 10'];
  
    // Draw
    const attachment = new MessageAttachment(canvas.toBuffer());
    let num = Math.floor(Math.random() * (wlcmsgs.length-1));
    channel.send(`${member} ${wlcmsgs[num]}`, attachment).then(message => {
      message.react(`<a:HesamGreeting:866306735420473375>`);
      message.react(`<a:HesamGreeting1:866306648755011644>`);
    });
};