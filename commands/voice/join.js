const { Command } = require('discord.js-commando');

module.exports = class JoinVCCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'voice',
            memberName: 'join',
            description: 'Joins the voice channel that the user is in.',
            guildOnly: true,
        })
    }

    async run(message, args) {
        if (!message.member.voice.channel) { return message.channel.send(`I can't join you currently :(`); }
        message.member.voice.channel.join();
    }
}
