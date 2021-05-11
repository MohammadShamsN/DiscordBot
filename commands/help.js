const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `connect\`\` - join the voice channel you are in
   disconnect\ : leave the voice channel you are in
   play <Song Name or url>\`\` - play songs from youtube
   pause\ : pause currently playing songs in the server
   resume\ : resume paused songs in the server
   queue\ : shows the song queue of the server
   skip\ : skips to next song in the queue
   skipto <Target number>\ : Multiple skips until target
   stop\ : stops the song and clears the queue
   volume <volume count or none>\ : see or adjust volume of songs
   np\ : see now playing song
   lyrics\ : get lyrics of current song
   shuffle\ : shuffle and randomize the queue
   invite\ : get invite link for the bot
   loop\ : enable / disable loop for the currently playing song
   remove <Target number>\ : remove a song from the queue
   help\ : to see this command`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Z1ROX Music Bot Commands Help",
        "https://cdn.glitch.com/7e9d342b-ad04-4e6e-8940-412aa3c82965%2F20210506_124716.png?v=1620738180348"
      )
      .setColor("00C6FF")
      .setTimestamp()
      .setDescription(revised)
  );
};
