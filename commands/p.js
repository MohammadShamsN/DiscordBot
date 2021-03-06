const ytdl = require("discord-ytdl-core");
const ytsr = require("ytsr");
const yt = require("ytdl-core");
const spdl = require('spdl-core').default;
const { MessageEmbed, Util } = require("discord.js");
const forHumans = require("../utils/forhumans.js");

exports.run = async (client, message, args) => {
  const channel = message.member.voice.channel;

  const error = (err) => message.channel.send(err);
  const send = (content) => message.channel.send(content);
  const setqueue = (id, obj) => message.client.queue.set(id, obj);
  const deletequeue = (id) => message.client.queue.delete(id);
  var song;

  if (!channel) return error("You must join a voice channel to play music!");

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("I don't have permission to join the voice channel");

  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error("I don't have permission to speak in the voice channel");

  const query = args.join(" ");

  if (!query) return error("You didn't provide a song name to play!");

  if (query.includes("youtube.com")) {
    try {
      const ytdata = await yt.getBasicInfo(query);
      if (!ytdata) return error("No song found for the url provided");
      song = {
        name: Util.escapeMarkdown(ytdata.videoDetails.title),
        thumbnail:
          ytdata.player_response.videoDetails.thumbnail.thumbnails[0].url,
        requested: message.author,
        videoId: ytdata.videoDetails.videoId,
        duration: forHumans(ytdata.videoDetails.lengthSeconds),
        url: ytdata.videoDetails.video_url,
        views: ytdata.videoDetails.viewCount,
      };
    } catch (e) {
      console.log(e);
      return error("Error occured, please check console");
    }
  } else if (query.includes("spotify.com/track/")) {
    
    
    
    try {
      spdl.getInfo('https://open.spotify.com/track/6tDDoYIxWvMLTdKpjFkc1B').then(infos => {
        spdl(infos.url).then(stream => {
          stream.on('end', () => console.log('Done!'));
          stream.pipe(console.log(infos.title));
        });
    });
    } catch (e) {
      console.log(e);
      return error("Error occured, please check console");
    }
    
    
    
  } else {
    try {
      await ytsr(query).then(fetched => {
        if (fetched.length === 0 || !fetched)
        return error("I couldn't find the song you requested!'");
        const data = fetched.items[0];
        song = {
          name: Util.escapeMarkdown(data.title),
          thumbnail: data.bestThumbnail.url,
          requested: data.author.name,
          videoId: data.id,
          duration: data.duration.toString(),
          url: data.url,
          views: data.views,
        };
      });
      
    } catch (err) {
      console.log(err);
      return error("An error occured, Please check console");
    }
  }

  var list = message.client.queue.get(message.guild.id);

  if (list) {
    list.queue.push(song);
    return send(
      new MessageEmbed()
        .setAuthor(
          "The song has been added to the queue",
          "https://img.icons8.com/color/2x/cd--v3.gif"
        )
        .setColor("F93CCA")
        .setThumbnail(song.thumbnail)
        .addField("Song Name", song.name, false)
        .addField("Views", song.views, false)
        .addField("Duration", song.duration, false)
        .addField("Requested By", song.requested.tag, false)
        .setFooter("Positioned " + list.queue.length + " In the queue")
    );
  }

  const structure = {
    channel: message.channel,
    vc: channel,
    volume: 85,
    playing: true,
    queue: [],
    connection: null,
  };

  setqueue(message.guild.id, structure);
  structure.queue.push(song);

  try {
    const join = await channel.join();
    structure.connection = join;
    play(structure.queue[0]);
  } catch (e) {
    console.log(e);
    deletequeue(message.guild.id);
    return error("I couldn't join the voice channel, Please check console");
  }

  async function play(track) {
    try {
      const data = message.client.queue.get(message.guild.id);
      if (!track) {
        data.channel.send("Ahang Tamom Shod Felan Khodahafeez.  <a:KEKBye:802573515973853184>");
        message.guild.me.voice.channel.leave();
        return deletequeue(message.guild.id);
      }
      data.connection.on("disconnect", () => deletequeue(message.guild.id));
      const source = await ytdl(track.url, {
        filter: "audioonly",
        quality: "highestaudio",
        highWaterMark: 1 << 25,
        opusEncoded: true,
      });
      const player = data.connection
        .play(source, { type: "opus" })
        .on("finish", () => {
          var removed = data.queue.shift();
          if(data.loop == true){
            data.queue.push(removed)
          }
          play(data.queue[0]);
        });
      player.setVolumeLogarithmic(data.volume / 100);
      data.channel.send(
        new MessageEmbed()
          .setAuthor(
            "Started Playing",
            "https://img.icons8.com/color/2x/cd--v3.gif"
          )
          .setColor("9D5CFF")
          .setThumbnail(track.thumbnail)
          .addField("Song Name", track.name, false)
          .addField("Views", track.views, false)
          .addField("Duration", track.duration, false)
          .addField("Requested By", track.requested, false)
          .setFooter("Youtube Music Player")
      );
    } catch (e) {
      console.error(e);
    }
  }
};
