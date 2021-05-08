const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();

const express = require('express');
const app = express();

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



app.post('/awake', (req, res) => {
  res.sendStatus(200);
});

const server = app.listen(3000, () => {
  console.log('[EXPRESS] Started listening on port 3000');
})

fetch("/awake").then(response => console.log(response));