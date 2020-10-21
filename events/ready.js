module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
    console.log(`Currently in ${client.guilds.cache.size} guild(s)`);
    // Gilby topics
    topics = [
        "the big happy :D",
        "with the butterflies",
        "on Predator's discord!",
        "it cool :)"
    ];
    
    // Random status function
    // Set our activity on start
    client.user.setActivity(topics[Math.floor(topics.length * Math.random())]);
    setInterval(() => {
        client.user.setActivity(topics[Math.floor(topics.length * Math.random())]);
    }, 60000);
}
