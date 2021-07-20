module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Gachi Hastam Khadange Erph", {type: 'PLAYING'});
};

