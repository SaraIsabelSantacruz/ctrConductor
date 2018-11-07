import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

import {
  TravelScreen,
  ProfileScreen,
  VouchersScreen,
  LoginScreen,
  LoadingScreen,
  CameraScreen
} from '../screens'

import colors from '../styles/colors'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Profile: ProfileScreen,
    Travel: TravelScreen,
    Vouchers: VouchersScreen
  },
  {
    initialRouteName: 'Travel',
    tabBarPosition: 'top',
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        color: colors.white,
        letterSpacing: 0.2,
        fontFamily: 'FilsonSoftRegular'
      },
      style: {
        backgroundColor: colors.primary,
        borderColor: colors.primary
      },
      indicatorStyle: {
        borderBottomWidth: 5,
        borderBottomColor: colors.white
      }
    }
  }
)

const WithModal = createStackNavigator(
  {
    Main: TabNavigator,
    Camera: CameraScreen
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true,
    }
  },
)

const SwitchNavigatorStack = createSwitchNavigator(
  {
    App: WithModal,
    Login: LoginScreen,
    Loading: LoadingScreen
  },
  {
    initialRouteName: 'Loading'
  }
)

export default SwitchNavigatorStack
