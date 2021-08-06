module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Emroz Saat 20", {type: 'PLAYING'});
};

