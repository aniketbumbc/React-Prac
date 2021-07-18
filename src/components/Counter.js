import React from 'react';

const Counter = (props) => {
  console.log('Counter');
  return (
    <div>
      <h2>Coutner</h2>

      <button onClick={props.incr}>Increment</button>
      <button onClick={props.decr}>Decrement</button>
    </div>
  );
};

export default Counter;
