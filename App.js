import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/state/store'
import NavigationWithState from './src/navigation/NavigationWithState'
import { Bubbles } from 'react-native-loader'
import colors from './src/styles/colors'

const { store, persistor } = configureStore()

class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <PersistGate
            loading={<Bubbles size={20} color={colors.primary} />}
            persistor={persistor}
          >
            <NavigationWithState />
          </PersistGate>
        </Provider>
    )
  }
}

export default App
