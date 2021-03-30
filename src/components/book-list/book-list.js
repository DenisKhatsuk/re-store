import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { fetchBooks } from '../../actions';

import './book-list.css';

const BookList = ({ books }) => {
  return (
    <ul className = "book-list">
      {
        books.map((book) => {
          return (
            <li key = { book.id }>
              <BookListItem book = { book } />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books, isLoading, error } = this.props;
    if (isLoading) return <Spinner />;
    if (error) return <ErrorIndicator error = { error } />;
    return <BookList books = { books } />;
  }
}

const mapStateToProps = ({ books, isLoading, error }) => ({ books, isLoading, error });
const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
    fetchBooks: fetchBooks(dispatch, bookstoreService),
  });

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);