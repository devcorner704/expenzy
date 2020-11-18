// import * as types from "./types";

// INITIALIZES CLOCK ON SERVER
// export const serverRenderClock = () => (dispatch) =>
//   dispatch({
//     type: types.TICK,
//     payload: { light: false, ts: Date.now() },
//   })

// INITIALIZES CLOCK ON CLIENT
// export const startClock = () => (dispatch) =>
//   setInterval(() => {
//     dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
//   }, 1000)

// INCREMENT COUNTER BY 1
// export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
// export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
// export const resetCount = () => ({ type: types.RESET })

// Expenzee ACTIONS START HERE
export const setCurrentLabel = (currentLabel) => (dispatch) =>
  dispatch({
    type: "SETTING_CURRENT_LABEL",
    payload: currentLabel,
  });

export const setIncome = (income) => (dispatch) =>
  dispatch({
    type: "SETTING_INCOME",
    payload: income,
  });

export const setExpense = (expense) => (dispatch) =>
  dispatch({
    type: "SETTING_EXPENSE",
    payload: expense,
  });

export const setCurrentTransactionType = (currentTransactionType) => (
  dispatch
) =>
  dispatch({
    type: "SETTING_CURRENT_TRANSACTION_TYPE",
    payload: currentTransactionType,
  });
