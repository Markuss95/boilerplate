import React from 'react'
import TodoSummary from './TodoSummary'
import ListFilters from './ListFilters'
import TodoList from './TodoList'

const TodoDasboard = () => {
    return (
        <div>
            <TodoSummary />
            <ListFilters />
            <TodoList />
        </div>
    )
}

export {TodoDasboard as default}