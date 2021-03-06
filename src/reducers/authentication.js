import * as types from '../actions/statics'

const initialState = {
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.USER:
      return {...state, user: action.payload}
    default:
      return state
  }
}
