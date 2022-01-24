import React, { useState } from 'react';
// These 6 conditions are FALSY in JS:
// false | null | undefined | '' | 0 | NaN
// React renders 'numeric' values regardless of Falsy or Truthy.
// For all other Falsy conditions, React does not render anything

function Falsy() {
  return (
    <div className="container">
      {/* non-numeric - not rendered */}
      <div>false: {false}</div>         {/* false: */}
      <div>null: {null}</div>           {/* null: */}
      <div>undefined: {undefined}</div> {/* undefined: */}
      <div>'': {''}</div>               {/* '': */}
      {/* numeric - rendered */}
      <div>0: {0}</div>                 {/* 0: 0*/}
      <div>NaN: {NaN}</div>             {/* NaN: NaN*/}
    </div>
  );
}

// Display a numeric value even if Falsy is valid as demonstrated below in this simple counter. This code would break if React consider 0 to be a Boolean

const FalsyCounter = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(clicks => clicks + 1);
  const dec = () => setCount(count - 1);
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export { Falsy, FalsyCounter };
