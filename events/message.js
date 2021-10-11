module.exports = (client, message) => {
  
  if (message.author.bot || message.channel.type === "dm") return;

  let GuildDB = await client.GetGuild(message.guild.id);
  const prefix = process.env.PREFIX;

  //Initialize GuildDB
  if (!GuildDB) {
    await client.database.guild.set(message.guild.id, {
      prefix: prefix,
      DJ: null,
    });
    GuildDB = await client.GetGuild(message.guild.id);
  }

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd =
    client.commands.get(command) ||
    client.commands.find((x) => x.aliases && x.aliases.includes(command));

  //Executing the codes when we get the command or aliases
  if (cmd) {
    if (
      (cmd.permissions &&
        cmd.permissions.channel &&
        !message.channel
          .permissionsFor(client.user)
          .has(cmd.permissions.channel)) ||
      (cmd.permissions &&
        cmd.permissions.member &&
        !message.channel
          .permissionsFor(message.member)
          .has(cmd.permissions.member)) ||
      (cmd.permissions &&
        GuildDB.DJ &&
        !message.channel
          .permissionsFor(message.member)
          .has(["ADMINISTRATOR"]) &&
        !message.member.roles.cache.has(GuildDB.DJ))
    )
      return client.sendError(
        message.channel,
        "Missing Permissions!" + GuildDB.DJ
          ? " You need the `DJ` role to access this command."
          : ""
      );
    cmd.run(client, message, args, { GuildDB });
    client.CommandsRan++;
  }


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