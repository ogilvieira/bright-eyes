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
      allowNull: false,
      set(value) {
        const salt = bcrypt.genSaltSync();
        this.setDataValue('senha', bcrypt.hashSync(value, salt));
      }
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
    freezeTableName: true
  });

  User.prototype.checaSenha = function(senha) {
    return bcrypt.compareSync(senha, this.dataValues.senha);
  }
   

  User.sync();
  return User;
}