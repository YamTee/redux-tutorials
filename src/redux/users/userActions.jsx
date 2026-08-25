import * as Type from "./userActionTypes";

import axios from "axios";

export const fetchUserRequested = () => {
  return {
    type: Type.USER_FETCH_REQUESTED,
  };
};

export const fetchUserSucceeded = (users) => {
  return {
    type: Type.USER_FETCH_SUCCEEDED,
    payload: users,
  };
};

export const fetchUserFailed = (message) => {
  return {
    type: Type.USER_FETCH_FAILED,
    payload: message,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequested());

    axios
      .get("https://jsonplaceholder.typicode.com/usersaa")
      .then((response) => {
        const users = response.data;

        dispatch(fetchUserSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};
