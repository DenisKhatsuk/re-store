import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { booksLoaded } from '../../actions';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((books) => {
        booksLoaded(books);
      });
  }

  render() {
    const { books, isLoading } = this.props;
    if (isLoading) return <Spinner />;
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

const mapStateToProps = ({ books, isLoading }) => ({ books, isLoading });
const mapDispatchToProps = {
    booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);