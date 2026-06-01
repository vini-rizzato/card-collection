# API - Card Collector

Uma API RESTful desenvolvida para gerenciar coleções de cartas, permitindo o registro e autenticação de usuários, e o gerenciamento (CRUD) de coleções personalizadas e do inventário de cartas em cada coleção.

## Integrantes

- André Augusto Rodrigues Martins (Documentação Técnica)
- Vini Rizzato (Desenvolvimento Back-end)
- Edson Luiz (Desenvolvimento Front-end)

## O Problema que Resolve

A dificuldade de colecionadores em organizar e gerenciar o inventário e informações de suas coleções de cartas de forma centralizada e segura.

## Público-Alvo

Colecionadores de cartas, entusiastas de TCG (Trading Card Games) e usuários que necessitam de um sistema para catalogar itens.

## Funcionalidades (MVP)

- **Autenticação e Cadastro**: Criação de conta e login seguros com hash de senhas e tokens JWT.
- **Gerenciamento de Coleções**: CRUD (Criar, Ler, Atualizar, Excluir) de coleções de cartas.
- **Gerenciamento de Cartas**: Busca de dados de cartas, adição ao inventário do usuário, listagem, atualização de quantidades e remoção.
- **Validações**: Verificações de e-mail existente, senhas e disponibilidade de cartas por coleção/set.

## Collections no MongoDB

- **User**: name, email, password, role, collections
  - Subdocumento **collections**: nameCollection, cards
    - Subdocumento **cards**: name, setName, set, image, qtd

## Tecnologias

- Node.js, Express, MongoDB (Mongoose), JWT (jsonwebtoken), bcrypt, cors, dotenv, nodemon

## Como rodar

1. Clone o repo: `git clone https://github.com/vini-rizzato/card-collection.git`
2. Instale: `npm install`
3. Configure o `.env` (ver `.env.example`)
4. Rode: `node index.js` (ou `npx nodemon index.js`)
5. Acesse: `http://localhost:8080`

## Endpoints da API

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/cadastro` | Cadastra um novo usuário | Não |
| POST | `/login` | Realiza o login do usuário e retorna o token JWT | Não |
| GET | `/collection` | Lista as coleções do usuário autenticado | Sim |
| POST | `/collection` | Cria uma nova coleção para o usuário | Sim |
| PUT | `/collection` | Atualiza o nome de uma coleção existente | Sim |
| DELETE | `/collection` | Deleta uma coleção e suas cartas | Sim |
| GET | `/collection/card` | Lista as cartas das coleções do usuário | Sim |
| GET | `/collection/card/add/:name` | Busca e exibe dados de uma carta específica antes de adicioná-la | Sim |
| POST | `/collection/card/add/:name` | Adiciona uma carta ao inventário de uma coleção do usuário | Sim |
| PUT | `/collection/card` | Atualiza informações de uma carta (ex: quantidade) | Sim |
| DELETE | `/collection/card` | Remove uma carta específica do inventário do usuário | Sim |

## Deploy

Link: (card-collection-psi.vercel.app)