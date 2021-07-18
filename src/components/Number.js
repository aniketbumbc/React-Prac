import React from 'react';

const Number = (props) => {
  console.log('Number');
  return (
    <div>
      <h2>Number</h2>
      <h4>{props.number}</h4>
    </div>
  );
};

export default React.memo(Number);
