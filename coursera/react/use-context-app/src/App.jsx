import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import myContext from './ MyContext'

function App() {
  const [data, setData] = useState("Hello from context")

  return (

    <myContext.Provider value={data}>
      <MyComponent/>
    </myContext.Provider>

  )
}

export default App
