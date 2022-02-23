import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount, fetchIncrement } from './counterSlice';
// index.js에서 store를 Provider에 등록된 것을 사용
// dispatch에 action을 등록
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <span>{count}</span>      
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
          <br/>
          <p>axios를 이용한 increment</p>
          <button onClick={() => dispatch(fetchIncrement(count))}>Fetch Increment</button>
      </div>
    </div>
  );
}
