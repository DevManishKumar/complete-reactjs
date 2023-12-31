import { legacy_createStore as createStore } from "redux";

const counter = (state = { counter: 0 }, action) => {
  if (action.type == "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type == "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  if (action.type == "ADDBY") {
    return { counter: state.counter + action.payload };
  }

  return state;
};

const store = createStore(counter);

export default store;
