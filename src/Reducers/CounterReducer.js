import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constant";

const initialState = {
  counter: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
