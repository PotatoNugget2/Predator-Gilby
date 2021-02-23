const Game = require('./classes/base.js')
const fs = require('fs'); // Include fs

var { evaluate } = require('mathjs')
var data = require('./data/counting.json');

module.exports = class CountingGame extends Game {
    constructor(client) {
        super(client, {
            name: 'Counting',
            channel: {
                id: config.games.counting.channel,
                exclusive: true,
            },
        })
    }

    run(msg, args) {
        // Check if bot
        if (msg.author.bot) { return; }
        // Check if the last message was sent by the user
        if ((msg.author.id === data.last) && (data.count !== 0)) { return this.fail(msg, 'You can not count two numbers in a row'); }
        // Run our content through a math eval
        try {
            // Attempt to eval the math
            var num = evaluate(msg.content)
        }
        catch (e) {
            // If it errors then we know it isn't a number
            return this.fail(msg, 'You must give a number!');
        }
        // Check if the number increments correctly
        if (num !== (data.count + 1)) { return this.fail(msg, 'Wrong number') }
        // React with gilby :)
        msg.react(config.response_reaction);
        // Add to the count
        data.last = msg.author.id;
        data.count++;
        // Write to our json file
        fs.writeFileSync('./games/data/counting.json', JSON.stringify(data))
    }

    /**
     * If the count fails this will run
     * @param {*} msg 
     */
    fail(msg, reason) {
        // React to the message ANGRY !!!!
        msg.react('😡');
        // Reply with the reason
        msg.channel.send(`<@${msg.author.id}> ruined the count 😔, it got to **${data.count}**!\n**Reason**: ${reason}`)
        // Reset the count
        data.count = 0;
        // Write to our json file
        fs.writeFileSync('./games/data/counting.json', JSON.stringify(data))
    }
}
