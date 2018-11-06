import { REPORTE_REQUEST, REPORTE_SUCCESS, REPORTE_FAILURE } from '../actions'

const initialState = {
  loading: false,
  reported: false,
  message: null
}

export const report = (state = initialState, action) => {
  switch (action.type) {
    case REPORTE_REQUEST:
      return { ...state, loading: true }
    case REPORTE_SUCCESS:
      return {
        ...state,
        reported: true,
        loading: false,
        message: 'Login Success'
      }
    case REPORTE_FAILURE:
      return {
        ...state,
        loading: false,
        message: 'Login Fail'
      }
    default:
      return state
  }
}