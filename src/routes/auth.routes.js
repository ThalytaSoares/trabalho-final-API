const express = require('express');
const router = express.Router();

// Importa o controller e o middleware
const authController = require('../controllers/auth.controller');
const authenticateToken = require('../middlewares/auth.middlewares');

// Rota pública para login
router.post('/login', authController.handleLogin);

// Rota protegida que usa o middleware de autenticação antes de chamar o controller
router.get('/dados-secretos', authenticateToken, authController.getSecretData);

module.exports = router;