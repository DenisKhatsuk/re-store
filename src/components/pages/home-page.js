import React from 'react';
import BookList from '../book-list';

const HomePage = () => {

  const books = [
    {
      id: 1,
      title: 'JavaScript and jQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
    },
    {
      id: 2,
      title: 'You Don\'t Know JS: Scope & Closures',
      author: 'Kyle Simpson',
    },
  ];
  return (
    <div className = "home-page">
      <BookList books = { books } />
    </div>
  );
};

export default HomePage;