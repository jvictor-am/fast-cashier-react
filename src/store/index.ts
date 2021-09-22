// third party imports
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// local imports
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware
]

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

sagaMiddleware.run(rootSaga)

export default store
