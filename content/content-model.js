'use strict'

const { Schema, model } = require('mongoose');

// Schema for video content documents in mongoDB
const ContentSchema = new Schema({
    name: { type: String, required: true },
    // Some fields here, but we only need 'name' and '_id' for this simple test job
});

// Virtual property to generate URL for particular content's page
ContentSchema.virtual('url').get(function () {
    return `/content/${this._id}`;
});

module.exports = model('Content', ContentSchema);
