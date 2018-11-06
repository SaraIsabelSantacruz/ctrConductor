import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { authentication } from './authentication'
import { navigationReducer as navigation } from './navigation'
import { reducer as network } from 'react-native-offline'
import { report } from './report'

const reducer = combineReducers({
  navigation,
  authentication,
  form,
  network,
  report
})

export default reducer
