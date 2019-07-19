import { all } from 'redux-saga/effects';
import TodoSaga from './todos'

export default function* rootSaga() {
  yield all([TodoSaga()]);
}
