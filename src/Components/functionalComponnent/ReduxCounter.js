import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounterValue,
  incrementCounterValue,
} from "../../Actions/CounterActions";
import { CounterSelector } from "../../Selectores/CounterSelector";

function ReduxCounter() {
  const { counter } = useSelector(CounterSelector);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>Redux Counter</h3>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(incrementCounterValue())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementCounterValue())}>
        Decrement
      </button>
    </div>
  );
}

export default ReduxCounter;
