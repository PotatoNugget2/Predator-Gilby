const fs = require('fs'); // Include fs

class Game {
    constructor(client, info) {
        /**
         * The discord client
         * @name Command#client
         * @type {CommandoClient}
         * @readonly
         */
        Object.defineProperty(this, 'client', { value: client });

        /**
         * Name of the game
         * @type {string}
         */
        this.name = info.name;

        /**
         * Channel for the game
         * @type {string}
         */
        this.channel = info.channel || null;
        
        /**
         * The amount of args expected
         * @type {number}
         */
        this.args = info.args || null,

        /**
         * Options for throttling command usages
         * @type {?ThrottlingOptions}
         */
        this.throttling = info.throttling || null;

        /**
         * Current throttle objects for the command, mapped by user ID
         * @type {Map<string, Object>}
         * @private
         */
        this._throttles = new Map();
    }
    // If there is no run then throw an error
    async run() {
        throw new Error(`${this.constructor.name} needs to have a run() method added to it!`)
    }

    /**
     * Creates/obtains the throttle object for a user
     * @param {string} userID - ID of the user to throttle for
     * @return {?Object}
     * @private
     */
    throttle(userID) {
        if (!this.throttling) return null;

        let throttle = this._throttles.get(userID);
        if (!throttle) {
            throttle = {
                start: Date.now(),
                usages: 0,
                timeout: this.client.setTimeout(() => {
                    this._throttles.delete(userID);
                }, this.throttling.duration * 1000)
            };
            this._throttles.set(userID, throttle);
        }
        return throttle;
    }

    /**
     * Saves the data of the game to a json file
     * @param {string} data 
     */
    save(data) {
        fs.writeFile('./games/data/' + this.name.toLowerCase() + '.json', JSON.stringify(data), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

}

module.exports = Game;
