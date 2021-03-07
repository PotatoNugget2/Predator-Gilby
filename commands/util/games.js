const { Command } = require('discord.js-commando');

module.exports = class GamesHelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'games',
            group: 'util',
            memberName: 'games',
            description: 'Lists the current active games',
            guildOnly: true,
        })
    }

    run(message, args) {
        let data = [];

        loader.games.map.forEach((v, k) => {
            if (v.channel) {
                data += `${(v.channel.exclusive) ? '**⭐ ' + k + '**' : '**💬 gilby ' + k + '**'} <#${ v.channel.id }>\n`;
            } else {
                data += `**💬 gilby ${k}** 🌎\n`;
            }
        });

        message.channel.send({
            embed: {
                color: 16705435,
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL()
                },
                title: 'Epic game box 📦',
                fields: [
                    {
                        name: '*Games can only be played in specified channel*',
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
    }
}
