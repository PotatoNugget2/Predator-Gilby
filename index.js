// Create our discord client
const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: '161174744585076736',
    commandPrefix: 'gilby'
});

// Vars
const path = require('path');
const fs = require('fs');
// Global Vars
config = require('./config.json');
client.registry
    .registerGroups([
        ['voice', 'Voice'],
        ['fun', 'Fun'],
    ])
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        prefix: false,
        ping: true,
        eval: false,
        unknownCommand: false,
        commandState: false,
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];

        client.on(eventName, event.bind(null, client));
        console.log(`Added [${eventName}] to events list`);
    });
});

loader = {
    util: {
        dir: './util/',
        map: new Map(),
        class: false,
    },
    games: {
        dir: './games/',
        map: new Map(),
        class: true,
    },
},

Object.entries(loader).forEach(([name, data]) => {
    fs.readdir(data.dir, (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (file.indexOf('.js') !== -1) {
                let util = require(data.dir + file);
                let utilName = file.split(".")[0];

                if (data.class) {
                    data.map.set(utilName, new util(client))
                } else {
                    data.map.set(utilName, util);
                }
                console.log(`Added [${utilName}] to ${name} list`);
            }
        });
    });
})

client.login(config.token);
