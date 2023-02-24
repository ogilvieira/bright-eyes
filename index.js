const Sequelize = require('sequelize');
const express = require('express')
const app = express()
const port = 3000

// VIEWS CONFIG
app.set('view engine', 'ejs');
app.set('view', './views/');
app.use(express.static('public'))

// Configura Models/Banco
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco-de-dados.sqlite'
});

// ROTAS
app.get('/', (req, res) => {
  res.send('Hello World!')
})


sequelize.authenticate((ev) => {
    console.info(ev);
    
    app.listen(port, () => {
        console.log(`Rodando em => http://localhost:${port}`)
    })      
    
});


