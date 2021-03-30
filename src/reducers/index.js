const initialState = {
  books: [],
  isLoading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const formatNumber = (num) => Number((num).toFixed(2));

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) return [
    ...cartItems,
    item,
  ];

  if (item.count === 0) return [
    ...cartItems.slice(0, idx),
    ...cartItems.slice(idx + 1),
  ];

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const createCartItem = (book, cartItem = {}, quantity) => {
  const { 
    id = book.id, 
    title = book.title, 
    count = 0, 
    total = 0 
  } = cartItem;
  return {
    id,
    title,
    count: count + quantity,
    total: formatNumber(total + quantity*book.price),
  }
};

const updateOrder = (state, bookId, quantity = 1) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => bookId === id);
  const itemIdx = cartItems.findIndex(({ id }) => bookId === id);
  const cartItem = cartItems[itemIdx];
  const newCartItem = createCartItem(book, cartItem, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newCartItem, itemIdx),
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        isLoading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        isLoading: false,
        error: action.payload,
      };
    case 'INCREASE_BOOK_TO_CART':
      return updateOrder(state, action.payload);
    case 'DECREASE_BOOK_IN_CART':
      return updateOrder(state, action.payload, -1);
    case 'DELETE_BOOK_FROM_CART':
      const { count } = state.cartItems.find(({ id }) => action.payload === id);
      return updateOrder(state, action.payload, -count);
    default:
      return state;
  }
};

export default reducer;
