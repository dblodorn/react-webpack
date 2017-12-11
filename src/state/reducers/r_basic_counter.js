const basicCounter = (state = 0, action) => {
  switch (action.type) {
    case 'BASIC_COUNTER':
      return action.increment
    default:
      return state
  }
}

export default basicCounter
