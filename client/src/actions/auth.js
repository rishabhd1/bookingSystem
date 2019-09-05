import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispactch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispactch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispactch({
      type: AUTH_ERROR
    });
  }
};

export const register = ({ name, email, password }) => async dispactch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispactch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispactch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispactch(setAlert(error.msg, "danger")));
    }

    dispactch({
      type: REGISTER_FAIL
    });
  }
};

export const login = (email, password) => async dispactch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispactch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispactch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispactch(setAlert(error.msg, "danger")));
    }

    dispactch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispactch => {
  dispactch({ type: LOGOUT });
};
