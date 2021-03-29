import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { booksLoaded, booksRequested, booksError } from '../../actions';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { 
      bookstoreService, 
      booksLoaded, 
      booksRequested,
      booksError } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((books) => {
        booksLoaded(books);
      })
      .catch((err) => booksError(err));
  }

  render() {
    const { books, isLoading, error } = this.props;
    if (isLoading) return <Spinner />;
    if (error) return <ErrorIndicator error = { error } />;
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
  }
}

const mapStateToProps = ({ books, isLoading, error }) => ({ books, isLoading, error });
const actions = {
    booksLoaded,
    booksRequested,
    booksError,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, actions)
)(BookList);