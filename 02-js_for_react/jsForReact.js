const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(3);
console.log("147", getBook(3));
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// rest operator - always at the end
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-19",
  // overwriting a new property
  pages: 1210,
};
updatedBook;

// function getYear(str) {
//   return publicationDate.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

// arrow function = (argument) => statement ; use them for one lined only
console.log(getYear(publicationDate));

const summary = ` ${title} is a ${pages} page book written by ${author} in ${getYear(
  publicationDate
)}. The book has${hasMovieAdaptation ? "" : " not"} been adapted as a movie
`;
summary;

const checkPageRange = pages > 1000 ? "over a thousand" : "less than thousand";
checkPageRange;
console.log(`The ${title} has ${checkPageRange} pages`);

// short circuiting using and operator
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "some string");
console.log(0 && "some string");

// short circuiting using or operator
console.log(true || "some string");
console.log(false || "some string");

// falsy values : 0, null, "", undefined

const hasSpanishTranslation = book.translations.spanish || "Not Translated";
console.log(hasSpanishTranslation);

// short circuiting 0 using or operator can go wrong in cases we want to
// consider 0 as a valid value. to resolve that JS introduced the
// Nullish coalescing operator "??"

console.log(book.reviews.librarything?.reviewsCount ?? "no data");

// optional chaining and using of mullish coalescing operator

// function totalReviews(book) {
//   const goodCount = book.reviews.goodreads.reviewsCount;
//   const libCount = book.reviews.librarything.reviewsCount;
//   return goodCount + libCount;
// }
// console.log(totalReviews(book));
// but in cases like id = 3 where librarything review count is undefined
// there will be error
// hence we use optional chaining where we first check for defined or undefined values

function totalReviewCount(book) {
  const gc = book.reviews.goodreads?.reviewsCount ?? 0;
  const lc = book.reviews.librarything?.reviewsCount ?? 0;
  return gc + lc;
}

console.log(totalReviewCount(book));
 */

/*
//  Understanding array mapping, filtering and reducing now 👇

// mapping
const multiple = [1, 2, 3, 4, 5].map((anything) => anything * 2);
multiple;

const books = getBooks();

function totalReviewCount(books) {
  const gc = books.reviews.goodreads?.reviewsCount ?? 0;
  const lc = books.reviews.librarything?.reviewsCount ?? 0;
  return gc + lc;
}

const titlesArr = books.map((book) => book.title);
titlesArr;

// note: if arrow function has to return more than one line instead of
// using return keyword just simply wrap the commants in () parenthesis
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: totalReviewCount(book),
}));
essentialData;

// array filter method -> the function will only contain a condition
// here we can add more than one filters as the returned op is an array
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce is most versatile method used to reduce all values to one value
// reduce(callback_function, starter value)

const allPagesInBooks = books.reduce((sum, book) => sum + book.pages, 0);
allPagesInBooks;

// array sort method - a mutable method

const arr = [7, 9, 4, 3, 10];
const ascArr = arr.sort((a, b) => a - b);
ascArr;
arr;

const descArr = arr.sort((a, b) => b - a);
descArr;
arr;

// to make it immutable we first slice it and then use sort
const arr1 = [7, 9, 4, 3, 10];
const immutSort = arr.slice().sort((a, b) => a - b);
immutSort;
arr1;

// using sort on objects
const BookPagesDesc = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => book.title);
BookPagesDesc;

// Add a new book object
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber Of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// remove a book object
const bookAfterDel = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDel;

// update an object
const bookAfterUpdate = bookAfterDel.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
bookAfterUpdate;
*/

// Learning the concept of asyncrnous functions, awaits, promises etc

// basically js takes time to fetch data and so it immediately executes the next piece of code
// and so to make JS wait for the data, js returns a "promise" immediately and then moves to next code
// promise can have many states like pending, rejected, fulfilled etc
// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Shruti");
// notice how shruti is printed before the promise is resolved

// JS is a synchronous language which means we go with line by line execution
// As the fetch function takes time to return actual data instead of promises,
// the js moves to the next step while just registering the fetch function
// to make the synchronous js -> asynchronous and wait till the data is fetched,
// we use await to wait while the promise is resolved.
// However since function call below doesn't have that keyword, it still console logs the latter statement
// but we just need to know this much as mainly we need to change states etc and we
// won't need to hav any functions that return the data anyway

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

getTodos();
console.log("Shruti");
