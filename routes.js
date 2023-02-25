const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { usersModel } = require('./db.js')

const LoginController = require('./controllers/login.controller');
const HomeController = require('./controllers/home.controller');

const AuthToken = async (req, res, next) => {
    const token = req.cookies?.token;
    if(!token) { return res.status(401).redirect('/login') }

    let decodedToken = null;

    try {
        decodedToken = jwt.verify(token, 'BRIGHTEYES');
    } catch( err ){
        res.cookies('token', '');
        if(err) return res.status(401).redirect('/login');
    }

    const user = await usersModel.findOne({ where: {
        id: decodedToken?.id,
        ativo: true
    }});

    if(!user) {
        res.cookies('token', '');
        return res.status(401).redirect('/login'); 
    }

    return next({ user });
};


module.exports = (app) => {
    router.get('/', AuthToken, HomeController.Index);

    router.get('/login', LoginController.Index);
    router.post('/login', LoginController.Login);

    router.get('/cadastro', LoginController.Cadastro);

    router.get('/recuperar-senha', LoginController.Recuperar);

    return router;
}