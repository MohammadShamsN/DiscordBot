module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("=help | https://twitch.tv/Z1ROXTV", {type: 'PLAYING'});
};

