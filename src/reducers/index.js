import { combineReducers } from 'redux'
import authentication from './authentication'
import message from './flashMessage'

export default combineReducers({
  authentication,
  message
})
