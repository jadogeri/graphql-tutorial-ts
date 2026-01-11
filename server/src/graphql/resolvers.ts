import * as db from '../database.js';
export const resolvers = {
  Query: {
    games: () => {  
      return db.games;
    },
    game: (_: any, args: { id: string }) => {
      return db.games.find(game => game.id === args.id);
    },
    authors: () => {
      return db.authors;      
    },
    author: (_: any, args: { id: string }) => {
      return db.authors.find(author => author.id === args.id);
    },
    reviews: () => {
      return db.reviews;      
    },
    review: (_: any, args: { id: string }) => {
      return db.reviews.find(review => review.id === args.id);
    },
  },
  Game:{
    reviews(parent:any) {
      return db.reviews.filter(review => review.game_id === parent.id);
    }
  },
  Author:{
    reviews(parent:any) {
      return db.reviews.filter(review => review.id === parent.id);
    }
  },
  Review:{
    game(parent:any) {
      return db.games.find(game => game.id === parent.game_id);
    },
    author(parent:any) {
      return db.authors.find(author => author.id === parent.author_id);
    }   
  },
  Mutation: {
    addGame(_: any, args: any) {
      let game = {
        ...args.game, 
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)

      return game
    },
    deleteGame(_: any, args: any) {
      db.games = db.games.filter((g) => g.id !== args.id)

      return db.games
    },
    updateGame(_: any, args: any ) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.games.find((g) => g.id === args.id)
    }
  }

};  
