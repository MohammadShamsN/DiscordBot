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
    const background = await loadImage("https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-412aa3c82965%2Fbackground.png?v=1620494059517");
    ctx.drawImage(background, 0, 0, 750, 400);

    // Text
    ctx.fillStyle = '#dd9fd0';
    ctx.font = '35px sans-serif';
    let text = `${member.user.tag}`;
    let x = canvas.width / 2 - ctx.measureText(text).width / 2;
    ctx.fillText(text, x, 250);

    ctx.fillStyle = '#72e6ff';
    ctx.font = '40px sans-serif';
    let text2 = `Welcome To ${guild.name} Family!`;
    x = canvas.width / 2 - ctx.measureText(text2).width / 2;
    ctx.fillText(text2, x, 325);

    // User avatar image
    ctx.beginPath();
    ctx.arc(375, 125, 75, 0, Math.PI*2, true);
    ctx.clip();
    ctx.closePath();
    ctx.stroke();

    const avatar = await loadImage(member.user.displayAvatarURL({
      format: 'png',
    }));
    ctx.drawImage(avatar, 300, 50, 150, 150);

    // Draw
    const attachment = new MessageAttachment(canvas.toBuffer());
    channel.send('', attachment);
};