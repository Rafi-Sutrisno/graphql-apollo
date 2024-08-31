let books = [
  {
    id: "1",
    title: "The Awakening",
  },
  {
    id: "2",
    title: "City of Glass",
  },
  {
    id: "3",
    title: "The Books",
  },
  {
    id: "4",
    title: "Avenger",
  },
  {
    id: "5",
    title: "Dark Forest",
  },
];

let authors = [
  {
    id: "1",
    name: "Kate Chopin",
  },
  {
    id: "2",
    name: "Paul Auster",
  },
  {
    id: "3",
    name: "John Kane",
  },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem ipsum", author_id: "1", book_id: "2" },
  { id: "2", rating: 10, content: "lorem ipsum", author_id: "2", book_id: "1" },
  { id: "3", rating: 7, content: "lorem ipsum", author_id: "3", book_id: "3" },
  { id: "4", rating: 5, content: "lorem ipsum", author_id: "2", book_id: "4" },
  { id: "5", rating: 8, content: "lorem ipsum", author_id: "2", book_id: "5" },
  { id: "6", rating: 7, content: "lorem ipsum", author_id: "1", book_id: "2" },
  { id: "7", rating: 10, content: "lorem ipsum", author_id: "3", book_id: "1" },
];

export default { books, authors, reviews };
