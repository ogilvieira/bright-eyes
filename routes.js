const express = require('express');
const router = express.Router();

const LoginController = require('./controllers/login.controller')

module.exports = (app) => {
    router.get('/', LoginController.Home);

    return router;
}