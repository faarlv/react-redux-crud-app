import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE,
} from "../actions/bookActions";

const API_URL =
  "https://crudcrud.com/api/c0b7210e32764719bd767918c8195215/books";

function* fetchBooksSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
}

function* addBookSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: ADD_BOOK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_BOOK_FAILURE, payload: error.message });
  }
}

function* updateBookSaga(action) {
  try {
    const { _id, ...data } = action.payload;
    const response = yield call(axios.put, `${API_URL}/${_id}`, data);
    yield put({ type: UPDATE_BOOK_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_BOOK_FAILURE, payload: error.message });
  }
}

function* deleteBookSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: DELETE_BOOK_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_BOOK_FAILURE, payload: error.message });
  }
}

function* bookSagas() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooksSaga);
  yield takeEvery(ADD_BOOK_REQUEST, addBookSaga);
  yield takeEvery(UPDATE_BOOK_REQUEST, updateBookSaga);
  yield takeEvery(DELETE_BOOK_REQUEST, deleteBookSaga);
}

export default bookSagas;
