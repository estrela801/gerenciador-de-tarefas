// Importar o pacote mysql2
const mysql = require('mysql2');

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',      // Endereço do servidor MySQL
  user: 'root',    // Nome de usuário do MySQL
  password: 'estrela801rodrigo187',  // Senha do MySQL
  database: 'cadastro' // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

// Executar uma consulta
connection.query('SELECT * from usuarios', (err, results, fields) => {
  if (err) {
    console.error('Erro na consulta:', err.stack);
    return;
  }
  console.log('Resultados da consulta:', results);
});

// Fechar a conexão
connection.end();
