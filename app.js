const express = require('express');
const sequelize = require('./db/connection');
const app = express();
const db = require('./db/connection.js');

//
const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O express está rodando na porta ${PORT}`);
});
//db connection
db
.authenticate()
.then(() => {
    console.log("conectou ao banco com sucesso");
})
.catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
})

//routers
app.get('/', (req, res) => {
  res.send("Está funcionando 2");
});
