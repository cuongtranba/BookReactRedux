import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
    //add values return from booksReducer to global state books
    books:booksReducer,
    activeBook:ActiveBook
});

export default rootReducer;
