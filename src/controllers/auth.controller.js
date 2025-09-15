// Importa o serviço que contém a lógica de negócio
const authService = require('../services/auth.services');

/**
 * Lida com a requisição de login.
 */
function handleLogin(req, res) {
  const { username, password } = req.body;

  // Chama o serviço para tentar autenticar o usuário
  const token = authService.loginUser(username, password);

  // Se o serviço retornou um token, o login foi bem-sucedido
  if (token) {
    res.json({ token: token });
  } else {
    // Se o serviço retornou null, as credenciais são inválidas
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
}

/**
 * Lida com a requisição para obter dados protegidos.
 */
function getSecretData(req, res) {
  // O middleware de autenticação já validou o token e adicionou 'req.user'.
  res.json({
    message: `Bem-vindo à área secreta, ${req.user.username}!`,
    data: [
      { id: 1, info: 'Esta é uma informação super secreta.' },
      { id: 2, info: 'A fórmula secreta é 42.' }
    ]
  });
}

// Exportamos as funções para que as rotas possam usá-las
module.exports = {
  handleLogin,
  getSecretData,
};