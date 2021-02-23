const helper = require("../helper");

module.exports = async (client, oldM, newM) => {
    // Run our role responses utility
    helper.loaderRun('util', 'roleResponses', [client, oldM, newM]);
    // Run our divider check
    helper.loaderRun('util', 'roleDividerCheck', [client, oldM, newM]);
    // Run our nickname check
    helper.loaderRun('util', 'nickCheck', [client, oldM, newM]);
};
