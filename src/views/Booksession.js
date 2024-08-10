import React from 'react';
import '../components/Booksession.css';

const Booksession = () => {
  return (
    <div className="container-book">
      <div className="text-column">
        <h2>Talk to a Counsellor</h2>
        <p>
          Life can sometimes feel overwhelmingly difficult, and when you're facing such intense emotions, it can be hard to see a way out. But I want you to know that there is hope and there are people who care deeply about you, including our Heavenly Father. Jeremiah 29:11 tells us, "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
        </p>
        <button className="book-button">Book Session</button>
      </div>
      <div className="image-column">
        <img src="../images/book_session.png" alt="Booking Session" className="image" />
      </div>
    </div>
  );
};

export default Booksession;
