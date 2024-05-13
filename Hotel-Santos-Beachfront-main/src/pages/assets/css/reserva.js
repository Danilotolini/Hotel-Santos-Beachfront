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

app.post('/tbl_reserva', (req, res) => {
  const {nome, cpf,  email, telefone, data_nasc, cep, rua, bairro} = req.body;
  const query = `INSERT INTO tbl_reserva (nome, cpf,  email, telefone, data_nasc, cep, rua, bairro) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(query, [nome, cpf,  email, telefone, data_nasc, cep, rua, bairro], (err, result) => {
    if (err) {
      console.error('Erro ao fazer reserva:', err);
      res.status(500).send('Erro ao reserva do usuário.');
    } else {
      console.log('Sua reserva foi garantida com sucesso.');
      res.status(200).send('Reserva do usuário feita com sucesso.');
    }
  });
});
//connection.end();
//servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
