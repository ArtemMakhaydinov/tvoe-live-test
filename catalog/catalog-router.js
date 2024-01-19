'use strict'

const express = require('express');
const router = express.Router();
const catalogController = require('./catalog-controller');

// Get catalog page

/**
 * @openapi
 * /catalog:
 *   get:
 *     tags:
 *       - Catalog
 *     description: 'Responds with Catalog html page'
 *     responses:
 *       200:
 *         description: 'Catalog html page'
 *       500:
 *         description: 'Some internal problem'
 */
router.get('/', catalogController.get);

module.exports = router;
