import React from 'react';

const Todo = (props) => {
  console.log('Todo');
  return (
    <div>
      <h2>Coutner</h2>

      <h2>My Todo</h2>
      {props.items.map((item) => {
        return <p key={item}>{item}</p>;
      })}
      <button onClick={props.add}>Add Todo</button>
    </div>
  );
};

export default Todo;
