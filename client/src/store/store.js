import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import initialState from './initialState.js'

export default createStore(rootReducer, initialState);