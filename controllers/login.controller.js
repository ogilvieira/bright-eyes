const db = require('../db');

exports.Home = async (req, res) => {
    const users = await db.users.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'nomeCompleto', 'email', 'tipo', 'ativo'],
    });
    res.render('login/login', {
        users
    });
}