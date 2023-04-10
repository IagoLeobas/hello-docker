const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Formulário</title>
      </head>
      <body>
        <form action="/" method="post">
          <label for="texto">Digite um texto:</label>
          <input type="text" id="texto" name="texto">
          <button type="submit">Enviar</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/', (req, res) => {
  const texto = req.body.texto;
  fs.writeFileSync('logs/teste.txt', texto);
  res.send(`
    <html>
      <head>
        <title>Dados salvos</title>
      </head>
      <body>
        <p>Dados salvos com sucesso.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
