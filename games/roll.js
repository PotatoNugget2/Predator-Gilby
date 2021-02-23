const Game = require('./classes/base.js')

module.exports = class RollGame extends Game {
    constructor(client) {
        super(client, {
            name: 'Roll',
            channel: {
                id: config.games.main.channel,
            },
            throttling: {
                usages: 5,
                duration: 10,
            },
        })
    }

    run(msg, args) {
        let botRolled = Math.floor(Math.random() * 12);
        let userRolled = Math.floor(Math.random() * 12)
        
        msg.reply(`I rolled **${botRolled}** and you rolled **${userRolled}**, that means ${botRolled > userRolled ? '**I won**' : '**you won**'}!`)
    }
}
