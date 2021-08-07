module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Emashab Saat8 Video Youtube", {type: 'PLAYING'});
};

