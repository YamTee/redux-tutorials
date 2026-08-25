import * as Type from "./userActionTypes";

const initialState = {
  isLoading: false,
  data: [],
  message: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.USER_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case Type.USER_FETCH_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case Type.USER_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
