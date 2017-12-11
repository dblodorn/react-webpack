import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers from './state/reducers'
import { routes } from './_routes.json'

// ROUTER & REDUX
const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const initStore = () => {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    applyMiddleware(routeMiddleware)
  )
}
const store = initStore()

// PAGES & COMPONENTS
import { Home, Page } from './pages'
import Document from './Document'

const COMPONENT_MAP = {
  'Home': Home,
  'Page': Page
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Document>
        {
          routes.map((r, i) => {
            return <Route exact path={r.path} pageId={r.page} component={COMPONENT_MAP[r.component]} key={r.page + i}/>
          })
        }
      </Document>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
