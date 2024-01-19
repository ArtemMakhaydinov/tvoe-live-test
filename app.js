'use strict'

const path = require('node:path');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const ConfigService = require('./config/config-service');
const MongoConnection = require('./config/mongodb-connection');

const catalogRouter = require('./catalog/catalog-router');
const contentRouter = require('./content/content-router');

const app = express();

// DB connection
const configService = new ConfigService();
const dbConnection = new MongoConnection(configService);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Regular express middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/catalog', catalogRouter);
app.use('/content', contentRouter);

// Swagger routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('docs.json', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
