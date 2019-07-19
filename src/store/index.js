import { combineReducers, createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas'

// Reducers
import {user} from './ducks/user'
import {todo} from './ducks/todo'
import {loading} from './ducks/loading'

const combinedReducers = combineReducers({loading, todo, user})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

export default store
