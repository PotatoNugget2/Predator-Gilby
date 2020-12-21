module.exports.run = (client, oldM, newM) => {
    if (!config.divider.includes(newM.roles.highest.id)) { return; } // Check if the highest is a divider
    if (!oldM.roles.cache.has(newM.roles.highest.id)) { return; } // Check if the divider isn't new
    newM.roles.remove(newM.roles.highest.id, 'Divider is highest role and was not just added to user'); // Remove the divider
}