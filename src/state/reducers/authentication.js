import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions'

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  token: null,
  message: null
}

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.response.data.data.usuario,
        token: action.response.data.data.token.access_token,
        message: 'Login Success'
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: 'Login Fail'
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}
