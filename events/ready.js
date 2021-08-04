module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Tarikh Start Stream Jome Saat 8 https://twitch.tv/erph", {type: 'PLAYING'});
};

