const { Command } = require('discord.js-commando');
const fs = require('fs');

const audioFiles = [];
fs.readdir("./commands/voice/audio/", (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        let fileName = file.split(".")[0]
        audioFiles[fileName] = {
            name: fileName,
            file: `./commands/voice/audio/${file}`,
        };
    });
});


module.exports = class PlayVCCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'voice',
            memberName: 'play',
            description: 'Plays the specified sound effect in current channel.',
            guildOnly: true,
            args: [
                {
                    key: 'sound',
                    prompt: 'What sound file do you want me to play?',
                    type: 'string',
                    default: 'list',
                },
            ],
        })
    }

    async run(message, args) {
        if (args.sound === 'list') {
            let data = [];

            Object.values(audioFiles).forEach((r) => {
                data += `**gilby play ${r.name}**\n\n`;
            });

            message.channel.send({
                embed: {
                    color: 16705435,
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL()
                    },
                    title: 'My tunes library 😎',
                    fields: [
                        {
                            name: 'Tunes list',
                            value: data.toString(),
                            inline: false
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: message.guild.name,
                        iconURL: message.guild.iconURL()
                    }
                }
            })
            return;
        }
        if (!message.member.voice.channel) { return message.channel.send(`I can't join you currently :(`); }
        if (audioFiles[args.sound]) {
            const connection = await message.member.voice.channel.join();
            connection.play(audioFiles[args.sound].file);
        } else {
            message.reply(":face_with_raised_eyebrow: Seems like I don't have that tune, run `gilby play` to get the ones that I do have.")
        }
    }
}
