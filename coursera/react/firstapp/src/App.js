import React, { useState } from "react";

function App() {

  let [counter,setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    ++counter;
    setCounter(counter);
    console.log("value added",counter);
  }

  const removeValue = () => {
    --counter;
    setCounter(counter);
    console.log("value removed",counter);
  }

  return(
    <>
      <h1>React first app</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;
