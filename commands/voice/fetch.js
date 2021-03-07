const { Command } = require('discord.js-commando');
const { fetchTunes } = require('../../helper');

module.exports = class JoinVCCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fetch',
            group: 'voice',
            memberName: 'fetch',
            description: 'Checks if there is any new tunes',
            guildOnly: true,
            ownerOnly: true,
        })
    }

    async run(message, args) {
        fetchTunes().then(e => {
            tunes = e;
            message.reply(`Promise has been resolved, check gilby play for any updates`);
        })
    }
}
