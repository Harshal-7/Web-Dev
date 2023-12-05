import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const [todoMsg, setTodoMsg] = useState("");
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='w-96 m-auto'>
            <div className='mt-10'>Todos</div>
            <ul className='list-none'>
                {todos.map(todo => (
                    <li key={todo.id}
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                    >
                        {/* <div className='text-white'>{todo.text}</div> */}
                        <div className='flex gap-2'>
                            <input
                                type="text"
                                className={`border text-white outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-white/10 px-2" : "border-transparent"}`}
                                value={todo.text}
                                onChange={(e) => setTodoMsg(e.target.value)}
                                readOnly={!isTodoEditable}
                            />
                            <button
                                onClick={() => {
                                    if (isTodoEditable) {
                                        dispatch(updateTodo(todo.id, todo.text))
                                        setIsTodoEditable(false)
                                    } else {
                                        setIsTodoEditable(prev => !prev)
                                    }
                                }}
                                className='text-white border-0 py-1 px-4 rounded text-md'
                            >📁</button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='text-white bg-red-500 border-0 py-1 px-3 rounded text-md'
                            >X</button>
                        </div>

                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Todos