const Game = require('./classes/base.js')

module.exports = class CoinGame extends Game {
    constructor(client) {
        super(client, {
            name: 'Coin',
            channel: config.games.main.channel,
            throttling: {
                usages: 5,
                duration: 10,
            },
        })
    }

    run(msg, args) {
        msg.reply(`🪙 I have flipped a coin and it landed on **${(Math.random() <= .5) ? 'Heads' : 'Tails' }**`);
    }
}
