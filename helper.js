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
};
