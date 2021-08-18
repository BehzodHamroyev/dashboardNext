import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import setTodos from '../Redux/Action/todosAction'

const Todos = () => {
    useEffect(() => {
       setTodos()
    }, [])
    const data = useSelector(state => state.todosReducer.data)
    return (
        <div className="container text-center">
            <h1>Todos</h1>
            {data.map((v, i) => {
                return <p>{v.id}</p>
            })}
        </div>
    )
}

export default Todos
