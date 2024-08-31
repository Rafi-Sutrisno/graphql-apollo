export const typeDefs = `#graphql
type Book {
  id: ID!
  title: String!
  reviews: [Review!]
}

type Author{
  id: ID!
  name: String!
  reviews: [Review!]
}

type Review {
  id: ID!
  rating: Int!
  content: String!
  book_id: String!
  author_id: String!
  book: Book!
  author: Author!
}

type Query {
  books: [Book]
  book(id: ID!): Book
  reviews: [Review]
  review(id: ID!): Review
  authors: [Author]
  author(id: ID!): Author
}

type Mutation {
    addBook(Book: AddBookInput!): Book
    deleteBook(id: ID!): [Book]
    updateBook(id: ID!, edits: EditBookInput!): Book
}
input AddBookInput {
    title: String!
}
input EditBookInput {
    title: String!
}
`;

// int, float, string, boolean, ID
