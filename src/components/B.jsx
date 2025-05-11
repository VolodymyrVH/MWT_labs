import React from 'react';
import { useSelector } from 'react-redux';

function B() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Comp B: Display</h1>
      <p>Current count: {count}</p>
    </div>
  );
}

export default B;