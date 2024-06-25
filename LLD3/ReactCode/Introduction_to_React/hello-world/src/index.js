import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyCounter({value, changeCount}) {
  return (
    <div>
      <button onClick={() => changeCount(value - 1)}>Decrement</button>
      <h3>{value}</h3>
      <button onClick={() => changeCount(value + 1)}>Increment</button>
    </div>
  )

}

function MyComponent() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <MyCounter
        value = {value}
        changeCount={setValue}
      ></MyCounter>
      <hr />
      <MyCounter
        value = {value}
        changeCount={setValue}
      ></MyCounter>
      <hr />
      <MyCounter
        value = {value}
        changeCount={setValue}
      ></MyCounter>
      <hr />
      <MyCounter
        value = {value}
        changeCount={setValue}
      ></MyCounter>
      <hr />
    </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MyComponent></MyComponent>);

