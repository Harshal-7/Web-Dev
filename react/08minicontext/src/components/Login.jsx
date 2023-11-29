import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handleUser = (e) => {
        setUser({username,password})
    }

  return (
    <div>
        <input type="text" placeholder='username'
            value={username} onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input type="text" placeholder='password'
            value={password} onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleUser}>Submit</button>

    </div>
  )
}

export default Login