const triggerWords = [];
triggerWords['hey'] = { text: `Hello! :slight_smile: ` };
triggerWords['hi'] = triggerWords['hey'];
triggerWords['hello'] = triggerWords['hey'];
triggerWords['gday'] = triggerWords['hey'];
triggerWords['goodday'] = triggerWords['hey'];
triggerWords['happy'] = { text: `Happy is my favorite word!` };
triggerWords['sorry'] = { text: `It's okay, I forgive you! :smiling_face_with_3_hearts: ` };
triggerWords['gilby'] = { words: 1, text: `Whats up! How are you doing? :sunglasses: ` };
triggerWords['^'] = { words: 1, text: `^` };
triggerWords['goodboy'] = { words: 1, text: `*pants*` };
triggerWords['bye'] = { text: `:cry: Hope I get to see you again soon!!!!` };
triggerWords['goodbye'] = triggerWords['bye'];

module.exports.run = async (client, msg) => {
    // Check if the message is in a disallowed channel
    if (config.disabled_cat[msg.channel.parent.id]) { return; }
    // Shift everything to lowercase for proper triggers
    let content = msg.content.toLowerCase()
    // Go through our message and check if in triggerWords
    let words = content.split(" ");
    let triggers = words.filter(e => triggerWords[e]);
    // Check length and only do first one
    if (triggers.length > 0) {
        // Set our trigger for use below
        let trigger = triggerWords[triggers[0]];
        // Check if the trigger is actually in our list, for safety I guess
        if (!trigger.text) { return; }
        // If the length of the word count is above our set trigger then return
        if (words.length > trigger.words) { return; }
        // Assuming we didn't get returned above we will send our trigger text
        // with a reaction
        msg.react(config.response_reaction);
        msg.channel.send(trigger.text);
    }
}
