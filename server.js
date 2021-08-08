var https = require('https');
var bodyParser = require('body-parser');
var request = require('request');

const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const http = require('http');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var accessToken; // Don't touch this. Mersi Ah
var subid; // Don't touch this too
var callback = "https://bote-erph.glitch.me";
var streamers = ['240473036']; // ID Streamer ha
var webhooks = ['https://discord.com/api/webhooks/873874187473805322/xpSB4d8JQdmimo8Dkq6DqIXhxy8MCvXKsdAIYIl904apSkxbs3o2-0SgB45U0FrUBlCZ']; // Webhook ha
var colors = ['000000']; // Rang ha

const client = new Discord.Client();

const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
};
client.config = config;
client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[Command Manager]: Loading Command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(client.config.token);

const fetch = require("node-fetch");

setInterval(async () => {
  await fetch("https://bote-erph.glitch.me").then(console.log("Pinged"));
}, 240000);







      // Authenticate
      const options = {
          url: 'https://id.twitch.tv/oauth2/token',
          headers: {
              'Accept': 'application/json',
          },
          json: {
              'client_id': process.env.CLIENT_ID,
              'client_secret': process.env.CLIENT_SECRET,
              'grant_type': 'client_credentials'
          }
      }

      request.post(options, (error, response, body) => {
          if(response.statusCode != 200) {
              console.log(body);
              return;
          }
          accessToken = 'Bearer ' + body['access_token'];
          console.log(`[INFO] Access token: ${accessToken}`);

          // Stream live event subscription
          for(var i = 0; i < streamers.length; i++) {
              request.post( {
                  url: 'https://api.twitch.tv/helix/eventsub/subscriptions',
                  headers: {
                      'Content-Type': 'application/json',
                      'Client-ID': process.env.CLIENT_ID,
                      'Authorization': accessToken
                  },
                  json: {
                      "type": "stream.online",
                      "version": "1",
                      "condition": {
                          "broadcaster_user_id": streamers[i]
                      },
                      "transport": {
                          "method": "webhook",
                          "callback": callback + "/webhooks/callback",
                          "secret": process.env.CLIENT_SECRET
                      }
                  }
              }, (error, response, body) => {
                  if(error)
                      console.log(error);
              });
          }
      });

      app.post('/webhooks/callback', (req, res) => {
          if(req.body.subscription['status'] == 'webhook_callback_verification_pending') {
              res.contentType('text/plain');
              res.send(req.body['challenge']);
              console.log('[INFO] Callback confirmation sent');
              subid = req.body.subscription.id;
          }
          else if(req.body.subscription['status'] == 'enabled' && req.body.subscription['type'] == 'stream.online') { // Stream is live
              getAndSendInfo(req, res);
          }
      });

      // Starting the server
      app.listen(3000, () => {
          console.log('[EXPRESS] Started listening on port 3000');
      });

async function getAndSendInfo(req, res) {
  var userid = req.body.subscription.condition['broadcaster_user_id'];
              var username = req.body.event['broadcaster_user_name'];
              var game; // Don't touch this
              var viewers; // Don't touch this
              var thumbnail; // Don't touch this
              var title; // Don't touch this
              var streamurl; // Don't touch this

              // ===================================================================================================================
              // Getting stream information
              await request.get( {
                  url: `https://api.twitch.tv/helix/streams?user_id=${userid}`,
                  headers: {
                      'Content-Type': 'application/json',
                      'Client-ID': process.env.CLIENT_ID,
                      'Authorization': accessToken
                  }
              }, async (error, response, body) => {
                  if(error)
                      console.log(error);

                  var obj = JSON.parse(body);
                  game = await obj.data[0].game_name;
                  viewers = await obj.data[0].viewer_count;
                  thumbnail = await obj.data[0].thumbnail_url;
                  if(thumbnail !== undefined) {
                      thumbnail = await thumbnail.replace("{width}", "1920");
                      thumbnail = await thumbnail.replace("{height}", "1080");
                  }
                  title = await obj.data[0].title;
                  streamurl = await `https://twitch.tv/${obj.data[0].user_login}`;
              });
              // ===================================================================================================================

              // ===================================================================================================================
              // Sending message to discord
              for(var i = 0; i < streamers.length; i++) {
                  if(userid == streamers[i]) {
                      // send message to discord
                      client.channels.cache.get(process.env.ALERT_CHANNEL_ID).send(
                      {
                          embed: {
                          color: colors[i],
                          author: {
                            name: username,
                            icon_url: "https://cdn.discordapp.com/attachments/787804906006380605/867105422275903518/tenor.gif"
                          },
                          /*image: {
                            url: `${thumbnail}`
                          },*/
                          thumbnail: {
                              url: "https://cdn.discordapp.com/attachments/787804906006380605/866403877330223124/PicsArt_07-14-11.31.46.png"
                          },
                          title: `${username} is now live on twitch!`,
                          url: streamurl,
                          fields: [{
                              name: "Game",
                              value: `${game}`,
                              inline: true
                            },
                            {
                              name: "Viewers",
                              value: `${viewers}`,
                              inline: true
                            }
                          ]
                        }
                    });
                  }
                  else
                      console.log("UserID and streamers mismatch");
              }
              // ===================================================================================================================
              res.sendStatus(200);
}