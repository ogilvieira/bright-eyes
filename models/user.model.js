const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) { 

  const User = sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      defaultValue: 'editor',
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    freezeTableName: true,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });
   
  User.sync();
  return User;
}