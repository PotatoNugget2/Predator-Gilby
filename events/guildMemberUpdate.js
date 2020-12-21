module.exports = async (client, oldM, newM) => {
    // Run our role responses utility
    client.util.get('roleResponses')
        .run(client, oldM, newM);
    // Run our divider check
    client.util.get('roleDividerCheck')
        .run(client, oldM, newM);
};