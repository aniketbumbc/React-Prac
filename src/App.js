import React, { useState, useCallback } from 'react';
import Todo from './components/Todo';
import Number from './components/Number';
import Counter from './components/Counter';
import User from './components/User';
import './App.css';

function App() {
  console.log('Render App');
  const [items, setItems] = useState([
    '1. Some todo',
    '2. Some todo',
    '3. Some todo',
  ]);

  const [number, setNumber] = useState(0);

  const add = useCallback(() => {
    setItems(() => [...items, 'New todo']);
  }, [items, setItems]);

  const increase = useCallback(() => {
    setNumber(number + 1);
  }, [number, setNumber]);

  const decrease = useCallback(() => {
    setNumber(number - 1);
  }, [number, setNumber]);

  return (
    <div className='App'>
      <Todo items={items} add={add} />
      <Number number={number} />
      <Counter incr={increase} decr={decrease} />
      <User />
    </div>
  );
}

export default App;
