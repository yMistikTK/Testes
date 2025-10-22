const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('Servidor backend do projeto Testes funcionando ✅'));

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT));
