import {
  FETCH_BOOKS_SUCCESS,
  ADD_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "../actions/bookActions";

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter((book) => book._id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
