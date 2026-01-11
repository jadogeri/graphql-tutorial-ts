export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    type Game {
        "the"
        id: ID!
        title: String!
        genre: String!
        releaseYear: Int!
        platforms: [String!]!
        reviews: [Review!]
    }
    
    type Review {
        id: ID! 
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }   

    type Query {
        reviews: [Review!]!
        review(id: ID!): Review
        games: [Game!]!
        game(id: ID!): Game
        authors: [Author!]!
        author(id: ID!): Author
    }
    type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
  }
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
  input EditGameInput {
    title: String,
    platform: [String!]
  }
    

  `;