'use strict'

const ContentModel = require('./content-model');

// Service class for operations with db
class ContentService {

    // get one content by _id
    async getById(id) {
        try {
            const content = await ContentModel.findById(id).exec();
            return content;
        } catch (err) {
            throw err;
        }
    }

    // Get all content documents
    async getAll() {
        try {
            const contents = await ContentModel.find({});
            return contents;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ContentService();
