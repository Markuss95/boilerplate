import React from 'react'
import TodoForm from './TodoForm'
import TodoSummary from './TodoSummary'
import ListFilters from './ListFilters'

const TodoDasboard = () => {
    return (
        <div>
            <TodoSummary />
            <ListFilters />
        </div>
    )
}

export {TodoDasboard as default}