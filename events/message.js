module.exports = (client, message) => {
  
   if ( message.webhookID == `872750036675596388` && message.channel.id == `872642682646822962`) {
    message.react(`<:Pog:871814464939393084>`)
  }
  
  if ( message.webhookID == `872756029593649153` && message.channel.id ==`872642742101094420`) {
    message.react(`<:Pog:871814464939393084`)
  }
  
  if ( message.webhookID == `872156540856057866` && message.channel.id == `867084733753327636`) {
    message.react(`<:sepahbodmorghi:872157619442315294>`)
  }
  
  if ( message.webhookID == `872156766669004820` && message.channel.id == `867084733753327636`) {
    message.react(`<:Emam:872157712128028742>`)
  }
  
  if (message.webhookID == `872756124472995870` && message.channel.id == `872642742101094420`) {
    message.react(`<:Emam:872157712128028742`)
  }
  
  if (message.author.bot) return;
  
  if ( message.author.id  == `509982147918954507` && message.channel.id == `867084733753327636` ) {
    message.react(`<:Pog:871814464939393084>`)
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