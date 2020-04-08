import { createStore } from "redux";

const initialState = {
  payloadUser: {},
  payloadProfile: {},
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        payloadUser: action.payload,
      };
    case "GET_PROFILE":
      return {
        ...state,
        payloadProfile: action.payload,
      };
    case "NEW_LIKE":
      return {
        ...state,
        payloadUser: action.payload,
      };
    case "UN_LIKE":
      return {
        ...state,
        payloadUser: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
