import React from 'react';

// Component demonstrating different conditional rendering techniques
const BookDetails = ({ books, showBooks }) => {
  // Method 1: If statement (early return)
  if (!showBooks) {
    return <div className="message">Books are hidden</div>;
  }

  // Method 2: Ternary operator for empty state
  const hasBooks = books && books.length > 0;

  return (
    <div className="book-container">
      <h1>Book Details</h1>
      
      {/* Method 3: Logical AND operator */}
      {hasBooks && (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.bname}</h3>
              <h4>₹{book.price}</h4>
              
              {/* Method 4: Ternary operator for price styling */}
              <span className={book.price > 600 ? 'expensive' : 'affordable'}>
                {book.price > 600 ? 'Premium Book' : 'Budget Friendly'}
              </span>
            </div>
          ))}
        </div>
      )}
      
      {/* Method 6: Ternary operator for no data message */}
      {!hasBooks ? (
        <div className="no-data">No books available</div>
      ) : null}
    </div>
  );
};

export default BookDetails;
