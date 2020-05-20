const { buildSchema } = require("graphql");

const userSchema = buildSchema(`
  type Produto {
    id: ID!,
    titulo: String!,
    descricao: String,
    preco: Float,
    status: Int
  }

  type User {
    id: ID!,
    username: String!,
    password: String!
  }

  type Token {
    token: String
  }

  type Response {
    msg: String,
    produto:Produto,
    usuario: User,
    token: String
  }

  type Query {
    produto(id: ID!): Response
    produtos: [Produto]
    user(id: ID!): Response
    users: [User]
  }
  type Mutation {

    createProduto(
      titulo: String!, 
      descricao: String!, 
      preco: Float!
    ): Response

    updateProduto(
      id: ID!
      titulo: String, 
      descricao: String, 
      preco: Float
    ): Response

    deleteProduto(
      id: ID!
    ): Response

    createUser(
      username: String!, 
      password: String!
    ): Response

    loginUser(
      username: String!, 
      password: String!
    ): Response

    recuperarUser(
      username: String!
    ): Response
  }
`);
module.exports = userSchema;
