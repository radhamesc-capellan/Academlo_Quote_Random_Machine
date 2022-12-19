import React, { useState } from "react";
import quotes from "../assets/quotes.json";

// Componente QuoteBox
const QuoteBox = () => {
  //! Set function to read json file randomly
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setindex] = useState(random);

  //! Function Change Quote
  const handleClick = () => {
    const newQuote = Math.floor(Math.random() * quotes.length);
    setindex(newQuote);
  };

  const colors = [
    "#684184",
    "#CB73BB",
    "#483243",
    "#2AA9D2",
    "#EF4B4B",
    "#1874C3",
    "#0C8282",
    "#51AF5B",
    "#E8647C",
    "#0033C7",
    "#B3E55E",
    "#BB8FA9",
    "#C9753D",
    "#5B252D",
    "#FB0091",
    "#24527A",
    "#ED5107",
    "#EE4848",
    "#C400C6",
    "#69AEFF",
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="quote-body">
      <h1>Quote Random Machine</h1>
      <div className="quote-box">
        <p className="quote" style={{ color: `${colors[randomColor]}` }}>
          <i className="fa-solid fa-quote-left"></i> {quotes[index].quote}{" "}
        </p>

        <p className="author" style={{ color: `${colors[randomColor]}` }}>
          {" "}
          {quotes[index].author}{" "}
        </p>

        <div className="button">
          <button
            onClick={handleClick}
            className="new-quote"
            style={{ background: `${colors[randomColor]}` }}
          >
            <i className="fa-solid fa-shuffle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
