const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js');
const ejsBlocks = require('ejs-blocks');
const path = require('path');

// VIEWS CONFIG
app.engine('ejs', ejsBlocks);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// STATIC FILES
app.use(express.static('public'))

// ROTAS
const routes = require(path.join(__dirname, 'routes.js'))(app);
app.use('/', routes);

db.sequelize
  .authenticate()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log("Express server listening on port " + port);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });