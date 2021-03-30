const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const increaseBookInCart = (bookId) => {
  return {
    type: 'INCREASE_BOOK_TO_CART',
    payload: bookId,
  };
};

const deleteBookFromCart = (bookId) => {
  return {
    type: 'DELETE_BOOK_FROM_CART',
    payload: bookId,
  };
};

const decreaseBookInCart = (bookId) => {
  return {
    type: 'DECREASE_BOOK_IN_CART',
    payload: bookId,
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((books) => dispatch(booksLoaded(books)))
    .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks,
  increaseBookInCart,
  deleteBookFromCart,
  decreaseBookInCart,
};