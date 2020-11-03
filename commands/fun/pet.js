const { Command } = require('discord.js-commando');
const fs = require('fs'); // Include fs
var pets = require('../../pets.json'); // Set our pets from the file

module.exports = class JoinVCCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pet',
            group: 'fun',
            memberName: 'pet',
            description: 'Lets you pet Gilby',
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 5
            },
        })
    }

    run(message, args) {
        pets.count++; // Increment our pet count by 1
        fs.writeFileSync('pets.json', JSON.stringify(pets)); // Write our new count to the file
        // React to the pet
        message.react(config.response_reaction);
        message.channel.send(`Thank you for petting me, <@${message.author.id}>. **:D** :heart:\n*Total Pets:* **${pets.count}**.`) // Reply to the member
    }
}