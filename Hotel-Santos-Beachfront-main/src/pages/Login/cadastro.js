const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'raphael', 
  password: '123', 
  database: 'Hotel_Santos_Beachfront'
});

function verificarUsuarioCadastrado(email, callback) {
  
  const sql = `SELECT COUNT(*) AS total FROM tbl_usuarios WHERE email = ?`;
  
  connection.query(sql, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }

    const usuarioCadastrado = results[0].total > 0;
    callback(null, usuarioCadastrado);
  });
}


const emailNovoUsuario = "novo_usuario@example.com";
verificarUsuarioCadastrado(emailNovoUsuario, (err, usuarioCadastrado) => {
  if (err) {
    console.error("Erro ao verificar usuário:", err);
    return;
  }

  if (usuarioCadastrado) {
    console.log("Usuário já cadastrado.");
  } else {
    console.log("Usuário não cadastrado. Pode prosseguir com o cadastro.");
    
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
  }
});

//servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
