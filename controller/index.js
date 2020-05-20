const fetchHelper = require('../helpers/fetchHelper');
const redis = require('../config/redis');

const userController = require('./userController')({ fetchHelper, redis });
const produtoController = require('./produtoController')({ fetchHelper });

module.exports = {
    userController: () => userController,
    produtoController: () => produtoController,
};