module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Feghat 1 Roze Dige PauseChamp", {type: 'PLAYING'});
};

