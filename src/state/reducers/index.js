import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import basicCounter from './r_basic_counter'

export default combineReducers({
  basicCounter,
  form: formReducer,
  router: routerReducer
})
