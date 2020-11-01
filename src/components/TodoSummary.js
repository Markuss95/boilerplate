import React from 'react'
import { Link } from 'react-router-dom'

const TodoSummary = () => {
    return (
        <div>
        <Link className="button" to ="/createtodo">Create a New Todo</Link>
        </div>
    )
}

export {TodoSummary as default}