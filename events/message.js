module.exports = async (client, msg) => {
    // Check for bot and disallow
    if (msg.author.bot) { return; }
    // Emit our gilby responses :D
    client.util.get('wordResponses')
        .run(client, msg);
}