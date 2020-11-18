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

const amountReducer = (state = { value: "" }, { type, payload }) => {
  switch (type) {
    case "SETTING_GLOBAL_AMOUNT":
      return {
        ...state,
        value: payload,
      };
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const incomeReducer = (state = { value: "" }, { type, payload }) => {
  switch (type) {
    case "SETTING_INCOME":
      return {
        ...state,
        value: payload,
      };
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const expenseReducer = (state = { value: "" }, { type, payload }) => {
  switch (type) {
    case "SETTING_EXPENSE":
      return {
        ...state,
        value: payload,
      };
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const currentLabelReducer = (state = { value: "" }, { type, payload }) => {
  switch (type) {
    case "SETTING_CURRENT_LABEL":
      return {
        ...state,
        value: payload,
      };
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const currentTransactionTypeReducer = (
  state = { value: "" },
  { type, payload }
) => {
  switch (type) {
    case "SETTING_CURRENT_TRANSACTION_TYPE":
      return {
        ...state,
        value: payload,
      };
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  amount: amountReducer,
  income: incomeReducer,
  expense: expenseReducer,
  currentLabel: currentLabelReducer,
  transactionType: currentTransactionTypeReducer,
};

export default combineReducers(reducers);
