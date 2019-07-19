import { call, put, takeLatest } from 'redux-saga/effects'


const fakeRequest = (action) => 
   new Promise((resolve) => 
      setTimeout(() => resolve(action.payload), 2000)
   )

function* setTodo(payload) {
   try {
      yield put({type: 'SET_LOAD', payload: true})
      const todo = yield call(fakeRequest, payload)
      yield put({type: "ADD_TODO", payload: todo});
      yield put({type: 'SET_LOAD', payload: false})
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put({type: 'SET_LOAD', payload: false})
   }
}

function* editTodo(payload) {
   try {
      yield put({type: 'SET_LOAD', payload: true})
      const todo = yield call(fakeRequest, payload)
      yield put({type: "EDIT_TODO", payload: todo});
      yield put({type: 'SET_LOAD', payload: false})
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put({type: 'SET_LOAD', payload: false})
   }
}

function* deleteTodo(payload) {
   try {
      yield put({type: 'SET_LOAD', payload: true})
      const todo = yield call(fakeRequest, payload)
      yield put({type: "DELETE_TODO", payload: todo});
      yield put({type: 'SET_LOAD', payload: false})
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put({type: 'SET_LOAD', payload: false})
   }
}

export default function* TodoSaga() {
   yield* [
      takeLatest("ADD_TODO_REQUESTED", setTodo),
      takeLatest("EDIT_TODO_REQUESTED", editTodo),
      takeLatest("DELETE_TODO_REQUESTED", deleteTodo)
   ]
}