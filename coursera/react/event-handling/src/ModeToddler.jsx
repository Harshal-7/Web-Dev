import React, { useState } from 'react'

function ModeToddler() {
    let [darkModeOn,setDarkModeOn] = useState(false);
    const darkMode = <h1>Dark mode is On</h1>
    const lightMode = <h1>Light mode is On</h1>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
        setDarkModeOn(darkModeOn);
    }

  return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button className='bg-blue-600 text-white p-2 mt-4' onClick={handleClick}>
            Click Me
        </button>
    </div>
  )
}

export default ModeToddler