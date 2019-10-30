import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import * as event from './event'

export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  event: event.reducer
})