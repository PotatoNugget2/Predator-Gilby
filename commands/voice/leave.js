const { Command } = require('discord.js-commando');

module.exports = class JoinVCCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'voice',
            memberName: 'leave',
            description: 'Leaves currently connected voice channel',
            guildOnly: true,
        })
    }

    run(message, args) {
        var guildMember = message.guild.member(this.client.user)
        var voiceChannel = guildMember.voice.channel
        if (!voiceChannel) { return message.channel.send(`I am not currently in a voice channel!`); }
        voiceChannel.leave();
    }
}