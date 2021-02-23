const Game = require('./classes/base.js')

module.exports = class CountingGame extends Game {
    constructor(client) {
        super(client, {
            name: 'Counting',
            channel: {
                id: '813625541780832287',
                exclusive: true,
            },
            throttling: {
                usages: 5,
                duration: 10,
            },
        })
    }

    run(msg, args) {
        //
    }
}
