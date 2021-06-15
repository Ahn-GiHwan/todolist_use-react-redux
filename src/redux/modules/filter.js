import { createActions, handleActions } from "redux-actions";

export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "react-redux/filter",
  }
);

// // action type define
// const SHOW_ALL = "react-redux/filter/SHOW_ALL";
// const SHOW_COMPLETE = "react-redux/filter/SHOW_COMPLETE";

// // action create function
// export function showAll() {
//   return {
//     type: SHOW_ALL,
//   };
// }
// export function showComplete() {
//   return {
//     type: SHOW_COMPLETE,
//   };
// }

// initialValue
const initialState = { filter: "ALL" };

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: (state, action) => "COMPLETE",
  },
  initialState,
  { prefix: "react-redux/filter" }
);

// // reducer
// export default function reducer(previousState = initialState, action) {
//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPELTE";
//   }

//   return previousState;
// }

export default reducer;
