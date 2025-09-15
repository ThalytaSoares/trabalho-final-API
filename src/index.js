const express = require('express');
const bodyParser = require('body-parser');

// Importa o nosso centralizador de rotas
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = 3000;

// Middlewares globais
app.use(bodyParser.json());

// Configura as rotas da aplicação
app.use('/api', authRoutes);

// Rota de teste da raiz
app.get('/', (req, res) => {
  res.json({ message: 'Nossa API está no ar e refatorada!' });
});

if (require.main === module) {
  // Só inicia o servidor se o arquivo for executado diretamente
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;