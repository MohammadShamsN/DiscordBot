const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.channel;
  var myMsg = channel.messages.fetch("896721365095305267")
  if(myMsg == undefined)
    console.log("ERROR: Message not found!")
  else if (myMsg.editable == false)
    console.log("ERROR: I cannot edit this message!")
  else
    myMsg.edit("Khaste Nabashid!");
};