module.exports = (client, message) => {
  
   if ( message.webhookID == `872750036675596388` && message.channel.id == `872642682646822962`) {
    message.react(`<:erphGachi:872781918809260053>`)
  }
  
  if ( message.webhookID == `872756029593649153` && message.channel.id ==`872642742101094420`) {
    message.react(`<:Pog:871814464939393084`)
  }
  
  if ( message.webhookID == `872156540856057866` && message.channel.id == `872642682646822962`) {
    message.react(`<:sepahbodmorghi:872157619442315294>`)
  }
  
  if ( message.webhookID == `872156766669004820` && message.channel.id == `872642682646822962`) {
    message.react(`<:Emam:872157712128028742>`)
  }
  
  if (message.webhookID == `872770444913168415` && message.channel.id == `872642742101094420`) {
    message.react(`<:Emam:872157712128028742`)
  }
  
  if (message.channel.id == `729399642504298566`) {
    message.react(`<a:POGGGIESS:872812506203193354>`)
  }
  
  if (message.author.bot) return;
  
  if ( message.channel.id == `753976707190489218` ) {
    message.react(`<:POGGIES:872777790204833803>`)
    message.react(`<:Pog:871814464939393084>`)
  }

  
  // ----------------------- [Logging] -----------------------
  
  // ---------------------------------------------------------
  
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