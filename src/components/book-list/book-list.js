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
    const { fetchBooks } = this.props;
    fetchBooks();
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      ownProps.bookstoreService.getBooks()
        .then((books) => dispatch(booksLoaded(books)))
        .catch((err) => dispatch(booksError(err)));
    },
  };
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);