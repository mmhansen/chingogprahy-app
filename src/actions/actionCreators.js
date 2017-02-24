import * as types from './statics'

export function loginUser (user) {
  return {
    type: types.USER,
    payload: user
  }
}

export function postMessage (message) {
  return {
    type: types.MESSAGE,
    payload: message
  }
}

export function clearMessage () {
  return {
    type: types.CLEAR_MESSAGE
  }
}
