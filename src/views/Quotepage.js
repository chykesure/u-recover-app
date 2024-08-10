import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../components/Quotepage.css';

const Quotepage = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <FaQuoteLeft className="quote-open" />
        <p className="quote-text">
        The greatest glory in living lies not in never falling, but in rising every time we fall. It's not about being perfect, it's about being resilient. Every setback is an opportunity to learn and grow, to come back stronger and wiser than before
        </p>
        <div className="quote-author">
          <img src="../images/quote.png" alt="Author" className="author-image" />
          <div className="author-name">John Lennon</div>
        </div>
        <FaQuoteRight className="quote-close" />
      </div>
    </div>
  );
};

export default Quotepage;
