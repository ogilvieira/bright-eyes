const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js');
const ejsBlocks = require('ejs-blocks');

// VIEWS CONFIG
app.engine('ejs', ejsBlocks);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// STATIC FILES
app.use(express.static('public'))

// ROTAS
app.get('/', (req, res) => {
  res.render('index', {})
})


db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(port, () => {
    console.log(`Rodando em => http://localhost:${port}`)
});

