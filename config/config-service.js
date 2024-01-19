'use strict'

const { config } = require('dotenv');

// Access to .env encapsulated in a class for modularity purposes
class ConfigService {
    constructor() {
        const { error, parsed } = config();
        if (error) {
            throw new Error('Can\'t find .env.');
        }
        if (!parsed) {
            throw new Error('.env is empty.')
        }
        this.config = parsed;
    }

    get(key) {
        const result = this.config[key];
        if (!result) {
            throw new Error('No such a key in .env.')
        }

        return result;
    }
}

module.exports = ConfigService;
