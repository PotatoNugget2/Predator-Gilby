module.exports = async (client, oldM, newM) => {
    // Run our role responses utility
    client.util.get('roleResponses')
        .run(client, oldM, newM);
};