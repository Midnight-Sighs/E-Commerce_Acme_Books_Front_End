import React from 'react';
import BookCard from '../BookCard/BookCard';


const ShoppingCart = ({books}) => {
        if (!books) {
                return <div>Your cart is empty</div>;
              }
  
  return (
    <div className="card-group">
      
    {books.map((book) => {
      return (
        <BookCard book={book}  key={book.id.bookId}/> 
      );
    })}
    </div>
  )
};

export default ShoppingCart;