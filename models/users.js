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
    nomeCompleto: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.nome} ${this.sobrenome}`;
      },
      set() {
        throw new Error('Do not try to set the `nomeCompleto` value!');
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      defaultValue: 'cliente',
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
        user.senha = bcrypt.hashSync(user.senha, salt);
      }
    }
  });
   
  User.sync();
  return User;
}