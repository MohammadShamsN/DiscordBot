module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Youtube Sub Konid Farda Video Darim", {type: 'PLAYING'});
};

