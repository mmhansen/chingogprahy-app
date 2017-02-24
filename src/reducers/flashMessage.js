import * as types from '../actions/statics'

const initialState = {
  message: {
    type: null,
    body: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.MESSAGE:
      return {...state, message: action.payload}
    case types.CLEAR_MESSAGE:
      return initialState
    default:
      return state
  }
}
