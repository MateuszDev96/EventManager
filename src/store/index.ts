import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { createRootReducer } from './reducers'
 
export const configureStore = (history: History, preloadedState?: any,) => {
  const reducers = createRootReducer(history)

  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk)
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }
 
  return {
    store,
    reducers
  }
}