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

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const createCartItem = (book, cartItem = {}) => {
  const { 
    id = book.id, 
    title = book.title, 
    count = 0, 
    total = 0 
  } = cartItem;
  return {
    id,
    title,
    count: count + 1,
    total: formatNumber(total + book.price),
  }
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
    case 'ADD_BOOK_TO_CART':
      const { books, cartItems } = state;
      const bookId = action.payload;
      const book = books.find(({ id }) => bookId === id);
      const itemIdx = cartItems.findIndex(({ id }) => bookId === id);
      const cartItem = cartItems[itemIdx];
      const newCartItem = createCartItem(book, cartItem);
      return {
        ...state,
        cartItems: updateCartItems(cartItems, newCartItem, itemIdx),
      };
    default:
      return state;
  }
};

export default reducer;
