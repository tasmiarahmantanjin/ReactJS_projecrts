import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Grandchild = (props) => {
  return (
    <div>
      <h1>Grand Child:</h1>
      <Child brand={props.brand} />
    </div>
  );
}

const Child = props => {
  return (
    <div>
      <h1>Child: {props.brand}</h1>
    </div>
  );
}

const App = () => {

  // create a state to pass the information as a variable to the Child component
  const [brandname] = useState("HiveHelsinki");


  return (
    <div className="App">
      <h1>TTasmia</h1>
      {/* <Child brand={brandname} /> */}
      <Grandchild brand={brandname} />

    </div>
  );
}

export default App;
