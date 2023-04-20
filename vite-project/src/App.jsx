import "./styles.css";

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
  return (
    <section className="booklist">
      {/* Pass the 'index' argument of the map method
          for us to use. This is a default argument of the map method
          and always comes second in the list of arguments. */}
      {bookArray.map((book, index) => {
        const { img, title, author } = book;
        // Use the 'index' argument as the value for the 'key' prop.
        return <Book key={index} img={img} title={title} author={author} />;
      })}
    </section>
  );
}

// Destructuring the props object in parentheses
function Book({ img, title, author, children }) {
  return (
    <article className="book">
      {/** Use the destructured props here */}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* Place your children prop here */}
      {children}
    </article>
  );
}

export default App;
