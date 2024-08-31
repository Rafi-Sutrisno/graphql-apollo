import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import database from "./database.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => database.books,
    authors: () => database.authors,
    reviews: () => database.reviews,
    book: (parent, args) => database.books.find((item) => item.id === args.id),
    author: (_, args) => database.authors.find((item) => item.id === args.id),
    review: (_, args) => database.reviews.find((item) => item.id === args.id),
  },

  Book: {
    // nama sesuai dengan object di schema
    //parent ini adalah book object (parent adalah apa yg direturn)
    reviews: (parent) =>
      database.reviews.filter((item) => item.book_id === parent.id),
  },
  Author: {
    // nama sesuai dengan object di schema
    //parent ini adalah author object (parent adalah apa yg direturn)
    reviews: (parent) =>
      database.reviews.filter((item) => item.author_id === parent.id),
  },
  Review: {
    author: (parent) => database.authors.find((a) => a.id === parent.author_id),

    book: (parent) => database.books.find((b) => b.id === parent.book_id),
  },

  Mutation: {
    addBook(_, args) {
      let book = {
        ...args.Book,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      database.books.push(book);

      return book;
    },
    deleteBook(_, args) {
      database.books = database.books.filter((b) => b.id !== args.id);

      return database.books;
    },
    updateBook(_, args) {
      database.books = database.books.map((b) => {
        if (b.id === args.id) {
          return { ...b, ...args.edits };
        }

        return b;
      });

      return database.books.find((b) => b.id === args.id);
    },
  },
};

// server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// membuat url
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
