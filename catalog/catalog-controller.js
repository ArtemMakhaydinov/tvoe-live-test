'use strict'

const contentService = require('../content/content-service')

// Controller class for catalog routes
// For this test job, only the content service is required for the catalog controller
class CatalogController {
    async get(req, res, next) {
        try {
            const contents = await contentService.getAll();
            res.set('Content-Type', 'text/html');
            res.render('catalog', {
                title: 'Catalog',
                contents,
            })
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = new CatalogController();
