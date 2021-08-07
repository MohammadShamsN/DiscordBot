module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("Video Jadid Upload Shod Link To About me", {type: 'WATCHING'});
};

