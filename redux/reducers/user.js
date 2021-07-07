const initialState = {
  currentuser: null
}

export const user = (state = initialState, action) => {
  return {
    ...state,
    currentUser: action.currentUser
  }
}