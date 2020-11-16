import { combineReducers } from "redux";
// import * as types from "./types";

// COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1
//     case types.DECREMENT:
//       return state - 1
//     case types.RESET:
//       return 0
//     default:
//       return state
//   }
// }

// INITIAL AMOUNT REDUCER
const initialState = {
  value: 10,
};

const amountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETTING_GLOBAL_AMOUNT":
      return {
        ...state,
        value: payload,
      };

    // case types.DECREMENT:
    //   return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  amount: amountReducer,
};

export default combineReducers(reducers);
