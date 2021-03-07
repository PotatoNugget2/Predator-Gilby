const fetch = require('node-fetch');

module.exports = {
    /**
     * Loads the specified function from loader data
     * @param {string} type Type of module
     * @param {string} module The module to run
     * @param {array} args The arguments to run module with
     * @return void
     */
    loaderRun: function (type, module, args) {
        try {
            loader[type].map.get(module)
                .run(...args)
        }
        catch {
            return false;
        }
    },
    
    /**
     * Grabs tunes from our api
     * @returns Promise
     */
    fetchTunes: function() {
        return new Promise((resolve, reject) => {
            fetch('https://jcra.dev/api/gilby')
                .catch((e) => reject(e))
                .then(res => res.json())
                .then((json) => {
                    resolve(json.tunes);
                });
        });
    }
};
