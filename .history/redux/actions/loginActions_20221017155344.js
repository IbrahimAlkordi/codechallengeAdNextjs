import React from "react"
import actions from "../constants/action-type";
import { LOGIN } from "../../middlewares/url";

export const loginAction =  (username, password) => ({
  type: actions.LOGIN,
  payload: {
    request: {
      url: LOGIN,
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
});

export const logout = () => ({
  type: actions.LOGOUT,
});


export const clearLogin = () => ({
  type: actions.CLEAR_LOGIN,
});
