import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheatres: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String): [Movie!]!
  }

  enum Nationality {
    INDIA
    AMERICAN
    CANADIAN
    BRITISH
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }

  input UpdateUsername {
    id: ID!
    username: String!
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    updateUsername(input: UpdateUsername): User!
  }
`;

export default typeDefs;
