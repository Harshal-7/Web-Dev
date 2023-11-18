import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);


  // let counter = 0;  // cannot update in UI but gets updated

  const addValue = () => {
    if(counter < 20){
      setCounter(++counter)
    }
  }

  const decreaseValue = () => {
    if(counter > 0){
      setCounter(--counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
