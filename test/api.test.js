const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/index'); 

let token;

describe('API de Autenticação (/api)', () => {

  it('Deve falhar o login com credenciais incorretas', (done) => {
    request(app)
      .post('/api/login')
      .send({ username: 'usuario_errado', password: 'senha_errada' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });

  it('Deve realizar o login com sucesso e retornar um token', (done) => {
    request(app)
      .post('/api/login')
      .send({ username: 'usuario1', password: 'senha123' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('token');
        token = res.body.token;
        done();
      });
  });
});

describe('Rotas Protegidas (/api)', () => {

  it('Não deve permitir acesso a /dados-secretos sem um token', (done) => {
    request(app)
      .get('/api/dados-secretos')
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });
  
  it('Não deve permitir acesso a /dados-secretos com um token inválido', (done) => {
    request(app)
      .get('/api/dados-secretos')
      .set('Authorization', 'Bearer token_invalido_qualquer')
      .end((err, res) => {
        // Um token inválido deve retornar 403 Forbidden
        expect(res.statusCode).to.equal(403); 
        done();
      });
  });

  it('Deve permitir acesso a /dados-secretos com um token válido', (done) => {
    request(app)
      .get('/api/dados-secretos')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('message', 'Bem-vindo à área secreta, usuario1!');
        done();
      });
  });
});