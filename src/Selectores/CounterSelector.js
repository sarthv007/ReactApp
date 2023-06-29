export const CounterSelector = (state) => {
  return {
    counter: state.counterReducer.counter,
  };
};
