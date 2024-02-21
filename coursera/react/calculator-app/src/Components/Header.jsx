import React from 'react'

function Header() {
  return (
    <div className=' w-full relative top-0 left-0 p-4 flex'>
        <ul className=' flex flex-row justify-center d-none'>
            <li>Home</li>
            <li>About</li>
            <li>Contact me</li>
        </ul>
    </div>
  )
}

export default Header