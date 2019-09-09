import { BOOKING_VALUE } from "./types";
import axios from "axios";

export const booking = ({ destination, driver }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ destination, driver });

  try {
    let res = await axios.post("/api/booking", body, config);
    res.data.destination = destination;
    res.data.driver = driver;

    dispatch({
      type: BOOKING_VALUE,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
