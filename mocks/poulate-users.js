const { usersModel } = require('../db.js');

const arr = [
    {
      nome: 'Ariane',
      sobrenome: 'Araújo Cabral de Figueiredo',
      email: 'ariane.figueiredo@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'David',
      sobrenome: 'Santana da Silva',
      email: 'david.silva@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'Felipe',
      sobrenome: 'Valli',
      email: 'felipe.valli@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'Gilmair',
      sobrenome: 'Vieira Barros',
      email: 'gilmair.barros@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'Ignacio',
      sobrenome: 'Javier Mourullo',
      email: 'ignacio.mourullo@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'Josué',
      sobrenome: 'Domingues de Oliveira Neto',
      email: 'josué.neto@senac.com.br',
      senha: "123456"
    },
    {
      nome: 'Lucas',
      sobrenome: 'Souza Pereira', 
      email: 'lucas.pereira@senac.com.br',
      senha: "123456"
    }
];

usersModel.bulkCreate(arr).then(res => {
    console.info('done');
});