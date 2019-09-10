import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "../actions/types";

let initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PAYMENT_SUCCESS:
    case PAYMENT_FAIL:
      return { ...state, payload };
    default:
      return state;
  }
}
