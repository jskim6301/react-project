import React, {useState} from 'react'

export default function State() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);  
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
  // setState의 첫번째 인자로 이전값을 가진다.
}
