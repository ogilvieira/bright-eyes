const UserModel = require('../models/user.model');

exports.Home = async (req, res) => {
    console.info(Object.keys(UserModel));

    const users = await UserModel.findAll({});

    console.info(users);

    res.render('login/login', {
        users
    });
}