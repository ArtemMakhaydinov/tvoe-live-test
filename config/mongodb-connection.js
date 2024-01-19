'use strict'

const mongoose = require('mongoose');

// Database connection encapsulated in a class for modularity purposes
class mongoConnection {
    constructor(configService) {
        this.URI = configService.get('MONGODB_URI');
        this.db = null;
        this.onLoad = this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(this.URI).then(() => {
                console.log('Connected to MongoDB successfully');
            });
            this.db = mongoose.connection;
        } catch (err) {
            throw err
        }
    }
}

module.exports = mongoConnection;
