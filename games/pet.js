const Game = require('./classes/base.js')
const fs = require('fs'); // Include fs
var data = require('./data/pet.json');

module.exports = class PetGame extends Game {
    constructor(client) {
        super(client, {
            name: 'Pet',
            throttling: {
                usages: 2,
                duration: 5
            },
        })
    }

    run(msg, args) {
        data.count++; // Increment our pet count by 1
        fs.writeFileSync('./games/data/pet.json', JSON.stringify(data)); // Write our new count to the file
        // React to the pet
        msg.react(config.response_reaction);
        msg.channel.send(`Thank you for petting me, <@${msg.author.id}>. **:D** :heart:\n*Total Pets:* **${data.count}**.`) // Reply to the member
    }
}
