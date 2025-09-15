# API Segura com Node.js, JWT e Testes Automatizados

![CI Pipeline - Testes da API](https://github.com/ThalytaSoares/trabalho-final-API/actions/workflows/ci-pipeline.yml/badge.svg)
Este projeto é uma API RESTful construída com Node.js e Express, focada em demonstrar uma arquitetura de software limpa (Services, Controllers, Routes), autenticação segura com JSON Web Tokens (JWT) e a implementação de uma pipeline de Integração Contínua (CI) com GitHub Actions.
---

## ✨ Features

-   **Autenticação Segura**: Sistema de login que gera um token JWT para acesso a rotas protegidas.
-   **Rotas Protegidas**: Endpoints que só podem ser acessados com um token JWT válido no cabeçalho `Authorization`.
-   **Arquitetura Modular**: O código é organizado seguindo o padrão de camadas (Services, Controllers, Routes, Middlewares) para facilitar a manutenção e escalabilidade.
-   **Testes Automatizados**: Suíte de testes completa utilizando Mocha, Chai e Supertest para garantir a qualidade e o funcionamento da API.
-   **Integração Contínua (CI)**: Uma pipeline configurada com GitHub Actions que roda os testes automaticamente a cada `push` ou `pull request`, garantindo que novas alterações não quebrem o código existente.

---

## 🛠️ Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no servidor.
-   [Express.js](https://expressjs.com/pt-br/) - Framework para construção de APIs.
-   [JSON Web Token (JWT)](https://jwt.io/) - Padrão para criação de tokens de acesso.
-   [Mocha](https://mochajs.org/) - Framework para organização e execução de testes.
-   [Chai](https://www.chaijs.com/) - Biblioteca de asserções para testes (verificações).
-   [Supertest](https://github.com/visionmedia/supertest) - Biblioteca para testar endpoints HTTP.

---

## 📂 Estrutura do Projeto

A estrutura de pastas foi organizada para separar as responsabilidades, seguindo as melhores práticas de desenvolvimento.
/
├── .github/workflows/      # Configuração da pipeline de CI com GitHub Actions
├── src/
│   ├── controllers/      # Camada de controle (orquestra o fluxo da requisição)
│   ├── middlewares/      # Middlewares (funções de autenticação)
│   ├── routes/           # Definição das rotas da API
│   ├── services/         # Camada de serviço (lógica de negócio pura)
│   └── index.js          # Ponto de entrada da aplicação (configuração do servidor)
├── test/                   # Testes automatizados da API
├── .gitignore              # Arquivos e pastas a serem ignorados pelo Git
├── package.json            # Metadados e dependências do projeto
└── README.md               # Esta documentação

---

## Endpoints da API

A API possui os seguintes endpoints:

| Método | Endpoint             | Descrição                                 | Requer Autenticação? |
| :----- | :------------------- | :---------------------------------------- | :------------------- |
| `POST` | `/api/login`         | Autentica um usuário e retorna um token JWT. | Não                  |
| `GET`  | `/api/dados-secretos`| Retorna dados confidenciais de exemplo.   | **Sim** (Bearer Token)   |

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto na sua máquina.

### Pré-requisitos

-   [Node.js](httpss://nodejs.org/en/) (versão 20.x ou superior)
-   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/ThalytaSoares/trabalho-final-API.git](https://github.com/ThalytaSoares/trabalho-final-API.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd trabalho-final-API
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Inicie o servidor:
    ```bash
    node src/index.js
    ```

O servidor estará rodando em `http://localhost:3000`.

---

## 🧪 Como Rodar os Testes

Para executar a suíte de testes automatizados e garantir que tudo está funcionando corretamente, use o comando:

```bash
npm test
