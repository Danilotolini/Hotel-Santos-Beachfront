const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'raphael',
  password: '123',
  database: 'Hotel_Santos_Beachfront'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida com sucesso.');
});

function verificarUsuarioCadastrado(email) {
  let usuariosCadastrados = SELECT * FROM tbl_cadastro
    for (let i = 0; i < usuariosCadastrados.length; i++) {
        if (usuariosCadastrados[i].email === email) {
            return true;
        }
    }
    return false;
}

app.post('/tbl_usuarios', (req, res) => {
  const { cpf, nome, email, senha} = req.body;
  const query = `INSERT INTO tbl_usuarios (CPF, nome, email, senha) VALUES (?, ?)`;
  connection.query(query, [cpf, nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.status(500).send('Erro ao cadastrar usuário.');
    } else {
      console.log('Usuário cadastrado com sucesso.');
      res.status(200).send('Usuário cadastrado com sucesso.');
    }
  });
});
//servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
