module.exports = (client, message) => {
  if (message.author.bot) return;
  
  if ( message.author.id  == `867087169638236230` && message.channel.id == `867084733753327636` ) {
    message.react(`<:VandalWTF:870764138522091531>`)
    message.react(`<a:hyperWOW:870764091411689483>`) 
    message.react(`<a:HesamGreetin:866306735420473375>`)
  }
  
  if ( message.author.id  == `867087169638236230` && message.channel.id == `867084733753327636` ) {
    message.react(`<:ErphYEP:870764113926684722>`)
  }
 
  if ( message.author.id == `867087169638236230` && message.channel.id == `867084733753327636` ) {
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
 args);
};
