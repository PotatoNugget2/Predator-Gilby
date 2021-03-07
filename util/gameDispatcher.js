module.exports.run = async (client, msg) => {
    // Check if message has our command prefix
    if (!msg.content.toLowerCase().startsWith(client.commandPrefix) && !client._exclusiveGames[msg.channel.id]) { return; }
    // Get the args
    let args = msg.content.trim().split(/ +/g);
    // Load the game
    let loadedGame = loader.games.map.get(args.splice(0, 2)[1]) || client._exclusiveGames[msg.channel.id]; // Get our game from the args
    // If no game then return
    if (!loadedGame) { return; }
    if (loadedGame.channel && (loadedGame.channel.id !== msg.channel.id)) { return; } // Check if its channel locked
    // Check for throttle
    const throttle = loadedGame.throttle(msg.author.id);
    if (throttle && throttle.usages + 1 > loadedGame.throttling.usages) {
        const remaining = (throttle.start + (loadedGame.throttling.duration * 1000) - Date.now()) / 1000
        return msg.reply(`You may not play the \`${loadedGame.name}\` game again for another ${remaining.toFixed(1)} seconds.`);
    }
    // Check if we have the require arg count
    if (loadedGame.args && args.length !== loadedGame.args) {
        return msg.reply(`This game is expecting ${loadedGame.args} arguments`)
    }
    // Run the game
    try {
        loadedGame.run(msg, args)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        // Add usages to throttle
        if (throttle) throttle.usages++;
    }
}
