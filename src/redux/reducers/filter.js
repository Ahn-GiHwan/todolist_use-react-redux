import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialState = { filter: "ALL" };

export function filter(previousState = initialState, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  if (action.type === SHOW_COMPLETE) {
    return "COMPELTE";
  }

  return previousState;
}

export default filter;
