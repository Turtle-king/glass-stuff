const Discord = require('discord.js');
module.exports = {
    name: 'makeerror',
    description: "Forces an error",
    usage: "",
    cooldown: 0,
    aliases: [],
    execute(message, args, client, config){
		message.delete();
        message.delete();
	}
};
