import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "./types";
import axios from "axios";

export const payment = ({ cardNumber, name }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ cardNumber, name });

  try {
    let res = await axios.post("/api/payment", body, config);

    if (res.data.valid) {
      dispatch({
        type: PAYMENT_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: PAYMENT_FAIL,
        payload: res.data
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};
