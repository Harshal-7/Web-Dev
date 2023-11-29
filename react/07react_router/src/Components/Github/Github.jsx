import React, { useState, useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Harshal-7')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })

    }, [])
    

    return (
        <div className=' p-10 bg-gray-700 text-white font-semibold text-4xl text-center
         flex flex-row flex-wrap gap-10 justify-center'>
            <div>
                <img src={data.avatar_url} alt="profile_pic" className=' w-80' />
            </div> 
            <div className='flex flex-col gap-10 justify-center'>
                <div>
                    Github User-Name : {data.name}
                </div>
                <div>
                    Github Followers : {data.followers}
                </div>
            </div>
        </div>
  )
}

export default Github