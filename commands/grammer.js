module.exports = {
    name: 'grammer',
    description: "this is a grammer command",
    execute(message, Discord){
    const grammerembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle(MessageMentions, 'check your grammer')
        .setDescription('you have tested the timeing of this ferret')
        .setImage('https://cdn.onlinewebfonts.com/svg/img_531810.png');

        
        message.channel.send(grammerembed)
    }

};
