import React from 'react';
import {
  increment,
  decrement,
  increaseByAmount,
} from '../redux/slices/counter/counterSlices';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <p>Count: {counter?.value}</p>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />

      <button onClick={() => dispatch(increaseByAmount({ amount: 3 }))}>
        Increase Amount
      </button>
    </div>
  );
};

export default Counter;
