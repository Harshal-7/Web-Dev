import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("");
    }

    return (
        <form onSubmit={addTodoHandler} className='flex justify-center gap-4 mt-12'>
            <input
                type="text"
                className='bg-gray-800 rounded-2xl border border-gray-700 focus:border-indigo-500
                    focus:ring-2 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors
                    duration-200 ease-in-out'
                placeholder='Enter a Task'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                type='submit'
                className=' text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600
                    focus:outline-none rounded-2xl text-lg'
            >
                Add Todo
            </button>


        </form>
    )
}

export default AddTodo