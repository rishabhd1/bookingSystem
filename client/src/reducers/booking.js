import { BOOKING_VALUE } from "../actions/types";

const initialState = {
  destination: "",
  driver: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_VALUE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
