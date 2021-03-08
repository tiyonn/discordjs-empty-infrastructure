const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`https://discord.gg/q8wnAqywQE`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dc"],
  permLevel: 0
}

exports.help = {
  name: 'discord',
  description: "discord",
  usage: 'discord'
}
