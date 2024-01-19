'use strict'

const swaggerJsdoc = require('swagger-jsdoc');
const { version } = require('./package.json');


const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'TVOЁ LIVE Test',
            version,
        },
    },
    apis: ['./content/content-router.js', './catalog/catalog-router.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;