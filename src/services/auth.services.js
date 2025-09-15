const jwt = require('jsonwebtoken');

// Em um projeto real, isso viria de variáveis de ambiente (process.env.JWT_SECRET)
const JWT_SECRET = 'seu-segredo-super-secreto';

// Banco de dados de usuários de mentirinha
const users = {
  'usuario1': 'senha123'
};

/**
 * Autentica um usuário e retorna um token JWT se as credenciais forem válidas.
 * @param {string} username - O nome de usuário.
 * @param {string} password - A senha.
 * @returns {string|null} - Retorna o token em caso de sucesso, ou null em caso de falha.
 */
function loginUser(username, password) {
  // Verifica se o usuário e a senha batem
  if (users[username] && users[username] === password) {
    // Se baterem, gera e retorna um token JWT
    return jwt.sign({ username: username }, JWT_SECRET, { expiresIn: '1h' });
  }
  // Se não baterem, retorna nulo
  return null;
}

// Exportamos a função para que o controller possa usá-la
module.exports = {
  loginUser,
};