export function basicIncrement(increment) {
  return {
    type: 'BASIC_COUNTER',
    increment
  }
}

const basicIncrementTrigger = (increment) => {
  return (dispatch, getState) => {
    const addIncrement = () => {
      return increment = getState().basicCounter + increment
    }
    dispatch(basicIncrement(addIncrement()))
  }
}

export default basicIncrementTrigger
