import { createStore } from "redux";

const initialState = {
    text: "Random",
};

const NEW_TEXT = "NEW_TEXT";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TEXT:
            return { ...state, text: action.userInput };
        default:
            return state;
    }
};

export default createStore(reducer);