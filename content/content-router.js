'use strict'

const express = require('express');
const router = express.Router();
const contentController = require('./content-controller');


// Get content page by ID

/**
 * @openapi
 * /content/{id}:
 *   get:
 *     tags:
 *       - Content
 *     description: Responds with Content html page by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Content ID
 *     responses:
 *       200:
 *         description: Content html page
 *       500:
 *         description: Incorrect ID, or some internal problem
 */
router.get('/:id', contentController.getOne);

module.exports = router;