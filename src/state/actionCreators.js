import axios from 'axios'
import { NavigationActions } from 'react-navigation'
import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT, 
  REPORTE_REQUEST,
  REPORTE_SUCCESS,
  REPORTE_FAILURE
} from './actions'


const resetTo = (route) => {

  const actionToDispatch = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: route })],
  });

  this.navigator.dispatch(actionToDispatch);
}

export const onLogin = () => {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST })

    try {
      let response = await axios.get('https://api.myjson.com/bins/13inj8');
      
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Travel',
          })
        ]
      }));

      return dispatch({
        type: LOGIN_SUCCESS,
        response
      })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })

      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Login',
          })
        ]
      }));
    }
  }
}

export const logout = () => {
  return dispatch => {

    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Login',
        })
      ]
    }));
    dispatch({ type: LOGOUT })
  }
}

export const onReport = () => {
  return async dispatch => {
    dispatch({
      type: REPORTE_REQUEST
    })
    try {
      let response = await axios.get('https://api.myjson.com/bins/13inj8')
      return dispatch({
        type: REPORTE_SUCCESS,
        response
      })
    } catch (error) {
      dispatch({ 
        type: REPORTE_FAILURE 
      })
    }
  }
}
