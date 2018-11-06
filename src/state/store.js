import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import reducers from './reducers/'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { createNetworkMiddleware } from 'react-native-offline'
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const persistConfig = {
  key: 'root',
  storage
}

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'roots',
  state => state.navigation
)

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = composeWithDevTools({ realtime: true })

const networkMiddleware = createNetworkMiddleware()

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(networkMiddleware ,thunk, navigationMiddleware))
  )

  const persistor = persistStore(store)

  return { store, persistor }
}
