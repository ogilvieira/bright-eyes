const { usersModel } = require('../db');
const jwt = require('jsonwebtoken');

exports.Index = async (req, res) => {
    res.clearCookie('token')

    const users = await usersModel.findAll();
    const data = [];
    users.forEach(user => {
        data.push({
            nome: user.nome,
            sobrenome: user.sobrenome,
            email: user.email,
        });
    });
   
    res.render('login/login');
}

exports.Login = async (req, res) => { 
    res.clearCookie('token')

    const { email, senha } = req.body;

    const user = await usersModel.findOne({ where: {
        email: email
    }});

    if(!user) {
        return res.render('login/login', { error: `Usuário inválido.` })
    } 

    if( !user.checaSenha(senha) ) {
        return res.render('login/login', { error: `Senha inválida.` })
    }

    const token = jwt.sign({ id: user.id }, 'BRIGHTEYES', { expiresIn: 60 * 60 * 1000 });

    res.cookie('token', token);

    res.redirect('/');
}

exports.Cadastro = async (req, res) => {
    if( res.cookie.token ){ return res.redirect('/'); }

    res.render('login/cadastro');
}

exports.Recuperar = async (req, res) => {
    if( res.cookie.token ){ return res.redirect('/'); }

    res.render('login/recuperar');
}