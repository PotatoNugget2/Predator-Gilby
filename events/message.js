const helper = require("../helper");

module.exports = async (client, msg) => {
    // Check for bot and disallow
    if (msg.author.bot) { return; }
    // Emit our gilby responses :D
    helper.loaderRun('util', 'wordResponses', [client, msg])
    // Dispatch our games 
    helper.loaderRun('util', 'gameDispatcher', [client, msg]);
}
