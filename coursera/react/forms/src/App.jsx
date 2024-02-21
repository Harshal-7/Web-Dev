import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const afterSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log('form submitted');
  }


  return (
    <>
      <div className="App flex p-5 justify-center">
        <form onSubmit={afterSubmit}>
          <fieldset>
            <div className="Field">
              <label htmlFor="name`">Name</label>
              <input 
                type="text" placeholder='Enter your name' name='name' id='name'
                value={name}
                onChange={handleChange}
                className='p-2 m-4 border rounded-xl' />
            </div>
            <button 
              type='submit' 
              disabled={!name}
              className='border w-full rounded-lg p-2 bg-blue-600 text-white disabled:bg-blue-300'
              >Submit </button>
            
            <div className='mt-8 text-center'>{name}</div>
            
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default App
