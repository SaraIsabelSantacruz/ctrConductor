import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import SwitchNavigatorStack from './Navigation'
import { connect } from 'react-redux'

const App = reduxifyNavigator(SwitchNavigatorStack, 'roots')

class AppNavigatorWithState extends App {}

const mapStateToProps = state => ({
  state: state.navigation
})

const NavigationWithState = connect(mapStateToProps)(AppNavigatorWithState)

export default NavigationWithState
