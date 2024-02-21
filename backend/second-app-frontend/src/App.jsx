import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [myapi, setMyapi] = useState([])

  useEffect(() => {
    axios.get('/api/myapi')
      .then((res) => {
        setMyapi(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <>
      <h1>First fullstack app</h1>
      <p>myapi : {myapi.length}</p>

      {
        myapi.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
