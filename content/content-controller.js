'use strict'

const contentService = require('./content-service');

// Controller class for content routes
class ContentController {
    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const content = await contentService.getById(id);
            res.set('Content-Type', 'text/html');
            res.render('content', {
                title: 'Content',
                content,
            });
        } catch (err) {
            return next(err)
        }
    }
}

module.exports = new ContentController(contentService);
