import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Core } from '@/components/Core/Core'
import { GlobalStyles } from '@/css/global'
import { configureStore } from '@/store'

export const root = '#app'
export const history = createBrowserHistory()
export const { store, reducers } = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Core />
        <GlobalStyles />
      </ConnectedRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector(root))