const nickBlacklist = [
    'nigger',
    'nigga',
    'faggot',
];

module.exports.run = (client, oldM, newM) => {
    if (!newM.nickname) { return; }
    if (!nickBlacklist.some(e => newM.nickname.toLowerCase().includes(e))) { return; }
    newM.setNickname(null);
}