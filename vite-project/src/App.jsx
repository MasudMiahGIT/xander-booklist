import "./styles.css";
import React, { useState } from 'react';

// Add an ID to each book object
const bookArray = [
  {
    img:
      "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 1
  },
  {
    img:
      "https://m.media-amazon.com/images/I/41X65pro2mS._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    title: "The Wasp Factory",
    author: "Iain Banks",
    id: 2
  }
];

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  function getBook(id) {
    const book = bookList.find(book => book.id === id);
    console.log(book);
    setSelectedBook(book);
  }

  return (
    <div>
      <h1>Book List</h1>
      {bookList.map(book => (
        <Book key={book.id} book={book} getBook={getBook} />
      ))}
      {selectedBook && (
        <div>
          <h2>Selected Book</h2>
          <p>{selectedBook.title} by {selectedBook.author}</p>
        </div>
      )}
    </div>
  );
}

function Book({ book, getBook }) {
  const { id, title, author } = book;

  function handleClick() {
    getBook(id);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>by {author}</p>
      <button onClick={handleClick}>Select Book</button>
    </div>
  );
}

export default App;
