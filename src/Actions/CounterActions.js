import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constant";

export const incrementCounterValue = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounterValue = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
