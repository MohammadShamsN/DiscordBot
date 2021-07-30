module.exports = (client, message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(client.config.prefix) !== 0) return
  
  if ( message.author.id == '865165796056629288' ) {message.react(`<a:HesamGreetin:866306735420473375>`)}

  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
