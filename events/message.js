const triggerWords = [];
triggerWords['hey'] = {text: `Hello! :slight_smile: `};
triggerWords['sorry'] = {text: `It's okay, I forgive you! :smiling_face_with_3_hearts: `};
triggerWords['gilby'] = {words: 1, text: `Whats up! How are you doing? :sunglasses: `};
triggerWords['^'] = {words: 1, text: `^`};
triggerWords['goodboy'] = { words: 1, text: `*pants*` };

module.exports = async (client, msg) => {
    // Check for bot and disallow
    if (msg.author.bot) { return; }
    // Check if the message is in a disallowed channel
    if (config.disabled_cat[msg.channel.parent.id]) { return; }
    // Go through our message and check if in triggerWords
    let words = msg.content.split(" ");
    let triggers = words.filter(e => triggerWords[e]);
    // Check length and only do first one
    if (triggers.length > 0) {
        // Set our trigger for use below
        let trigger = triggerWords[triggers[0]];
        // If the length of the word count is above our set trigger then return
        if (words.length > trigger.words) { return; }
        // Assuming we didn't get returned above we will send our trigger text
        // with a reaction
        msg.react(config.response_reaction);
        msg.channel.send(trigger.text);
    }
}