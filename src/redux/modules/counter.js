// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = 'ADD_NUMBER';
const SUBTRACT_NUMBER = 'SUBTRACT_NUMBER';
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
  };
};
export const subtractNumber = (payload) => {
  return {
    type: SUBTRACT_NUMBER,
    payload,
  };
};
// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case SUBTRACT_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};
// export default reducer
export default counter;
