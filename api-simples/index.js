// Importando o Express
const express = require('express');
const app = express();
const port = 3000;

// Definindo uma rota simples
app.get('/', (req, res) => {
  res.send('API Simples está funcionando!');
});

// Definindo uma rota para retornar dados em JSON
app.get('/dados', (req, res) => {
  res.json({ corno: 'Aqui estão seus dados!' });
});

// Iniciando o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});