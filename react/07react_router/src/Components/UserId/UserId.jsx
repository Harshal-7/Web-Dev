import React from 'react'
import { useParams } from 'react-router-dom'

function UserId() {
    const {userid} = useParams();

  return (
    <div className=' p-10 bg-gray-700 text-white font-semibold text-4xl text-center'>
        User-Id : {userid}
    </div>
  )
}

export default UserId