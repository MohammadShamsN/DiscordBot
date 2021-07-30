module.exports = (client, message) => {
  if (message.author.bot) return;
  
  if ( message.author.id  == `582716832528465920` && message.channel.id == `850325608243789864` ) {
    message.react(`<a:HesamGreetin:866306735420473375>`)
  }
  if (message.content.indexOf(client.config.prefix) !== 0) return

  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
