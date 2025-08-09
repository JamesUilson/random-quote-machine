import React, { useState, useEffect } from "react";

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(getRandomIndex(quotes.length));
  }, []);

  function handleNewQuote() {
    let newIndex;
    do {
      newIndex = getRandomIndex(quotes.length);
    } while (newIndex === index); // yangi iqtibos avvalgisiga teng bo‘lmasligi uchun
    setIndex(newIndex);
  }

  const currentQuote = quotes[index];
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + currentQuote.text + '" - ' + currentQuote.author)}`;

  return (
    <div id="quote-box" style={styles.quoteBox}>
      <div id="text" style={styles.text}>"{currentQuote.text}"</div>
      <div id="author" style={styles.author}>- {currentQuote.author}</div>
      <div style={styles.buttons}>
        <a
          id="tweet-quote"
          href={tweetURL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.tweetButton}
          aria-label="Tweet this quote"
        >
          Tweet
        </a>
        <button id="new-quote" onClick={handleNewQuote} style={styles.newQuoteButton}>
          New Quote
        </button>
      </div>
    </div>
  );
}

const styles = {
  quoteBox: {
    maxWidth: "600px",
    margin: "100px auto",
    padding: "30px",
    backgroundColor: "#f0f8ff",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  },
  text: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  author: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#666",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  tweetButton: {
    backgroundColor: "#1DA1F2",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  newQuoteButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default App;
