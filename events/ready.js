module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Emshab Saat 8 Video Youtube", {type: 'PLAYING'});
};

