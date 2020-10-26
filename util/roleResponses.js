module.exports.run = (client, oldM, newM) => {
    // Calculate our diff
    var diff = newM.roles.cache.difference(oldM.roles.cache);
    // If diff above is 0 then return
    if (diff.size <= 0) { return; }
    // Search through the diff
    diff.forEach(e=> {
        if (!newM.roles.cache.has(e.id)) { return; } // Check if our new member is the one that got it
        if (!config.supporter.roles[e.id]) { return; } // Check if the new role is a supporter role
        client._supporterChannel.send(`Thank you for the support! :heart: \n<@${newM.id}>`); // Send our message in the channel
    })
}