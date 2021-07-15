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
    const background = await loadImage("https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-");
    ctx.drawImage(background, 0, 0, 750, 400);

    // Text
    ctx.fillStyle = '#dd9fd0';
    ctx.font = '35px sans-serif';
    let text = `${member.user.tag}`;
    let x = canvas.width / 2 - ctx.measureText(text).width / 2;
    ctx.fillText(text, x, 250);

    // MemberCount
    ctx.fillStyle = '#dd9fd0';
    ctx.font = '25px sans-serif';
    let text2 = `${guild.memberCount}`;
    let x2 = canvas.width - 2 * ctx.measureText(text2).width - 10;
    ctx.fillText(text2, x2, 380);
  
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
  
    let wlcmsgs = ['text 0',
                  'text 1',
                  'text 2',
                  'text 3',
                  'text 4',
                  'text 5',
                  'text 6',
                  'text 7',
                  'text 8',
                  'text 9',
                  'text 10'];
  
    // Draw
    const attachment = new MessageAttachment(canvas.toBuffer());
    let num = Math.floor(Math.random() * (wlcmsgs.length-1));
    channel.send(`${member} ${wlcmsgs[num]}`, attachment);
};