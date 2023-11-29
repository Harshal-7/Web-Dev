import React from 'react'
import { useState } from 'react'


function InputComponent() {
    const [inputText,setInputText] = useState("");

    const[form,setForm] = useState({
        firstName : 'Luck',
        lastName : 'Jones',
        mailId : 'lukeJones@sculpture.com'
    })

    const handelChange = (e) => {
        setInputText(e.target.value);
    }

    const mystyle = {
        border: "1px solid black",
        padding: "4px",
        borderRadius: "10px"
    }
    
  return (
   <div className='w-full flex flex-col gap-4'>
        <div>
            <input value={inputText} onChange={handelChange} style={mystyle} />
            <p className='text-blue-600 mt-4'>
                Your Text : {inputText}
            </p>
            <button onClick={() => setInputText("")} className='text-red-600 mt-4'>
                Reset
            </button>
        </div>

        <div className='flex flex-col gap-2'>
            <div>
                <label htmlFor="fName">First Name : </label>
                <input id='fName' value={form.firstName} style={mystyle}
                onChange={(e) => {
                    setForm({
                        ...form,
                        firstName : e.target.value
                    })
                }}/>
            </div>

            <div>
                <label htmlFor="lName">Last Name : </label>
                <input id='lName' value={form.lastName} style={mystyle}
                onChange={(e) => {
                    setForm({
                        ...form,
                        lastName : e.target.value
                    })
                }}/>
            </div>

            <div>
                <label htmlFor="mailId">Email : </label>
                <input id='mailId' value={form.mailId} style={mystyle}
                onChange={(e) => {
                    setForm({
                        ...form,
                        mailId : e.target.value
                    })
                }}/>
            </div>

            <div>
                <p>
                    {`${form.firstName} ${form.lastName} (${form.mailId})`}
                </p>
            </div>


        </div>
    </div>
  )
}

export default InputComponent