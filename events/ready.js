module.exports = (client) => {
  console.log("[Discord API]: Logged In As " + client.user.tag);

  client.user.setActivity("📱 Social Media", {type: 'WATCHING'});

  client.Manager.init(client.user.id);
  client.RegisterSlashCommands();
};

