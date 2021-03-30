import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddToCart }) => {
  const { id, title, author, price, cover } = book;
  return (
    <div className = "book-list-item">
      <div className = "book-cover">
        <img src = { cover } alt = "book cover"/>
      </div>
      <div className = "book-details">
        <a href = "#_" className = "book-title">{ title }</a>
        <div className = "book-author">by { author }</div>
        <div className = "book-price">${ price }</div>
        <button
          onClick = { () => onAddToCart(id) } 
          className = "btn btn-info add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default BookListItem;