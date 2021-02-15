import { createStore } from "redux";

const initialState = {
  usaState: "",
};

const US_STATE = "US_STATE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case US_STATE:
      return { ...state, usaState: action.userInput };
    default:
      return state;
  }
};

export default createStore(reducer);
