'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
config.server.port = 9000;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

// Seeds
config.seedProjects.enable = true;
config.seedProjects.basePaths = ["./src/seeds"];

validateConfig(config);
module.exports = config;
