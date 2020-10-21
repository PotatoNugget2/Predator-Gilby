module.exports = async (client, reaction, user) => {
    if (user.bot) { return; }
    if (reaction.message.guild.id != config.ticket.guild) { return; }
    if (reaction.message != client._ticketMessage) { return; }
    if (reaction.emoji.name != '🎫') { reaction.remove(); return; }

    client.emit('ticketCreate', user, reaction.message.guild);

    reaction.users.remove(user.id);
}