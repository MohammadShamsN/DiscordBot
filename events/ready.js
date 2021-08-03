module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Be Zodi Amade Be Kar Misham PauseChamp", {type: 'PLAYING'});
};

