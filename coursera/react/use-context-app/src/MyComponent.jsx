import React, { useContext } from 'react'
import myContext from './ MyContext'

function MyComponent() {

    const contextData = useContext(myContext);

  return (
    <div>
        <p>
            {contextData}
        </p>
    </div>
  )
}

export default MyComponent