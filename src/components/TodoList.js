import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import selectTodos from '../selectors/todos'

const TodoList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-desktop">Task</div>
                <div className="show-for-desktop">Creation date</div>
                <div className="show-for-mobile">Tasks</div>
            </div>
            <div className="list-body">
                {props.todos.length === 0 ?
                    <div> There are no todos</div>
                    : (props.todos.map((todo) => {
                        return <TodoListItem key={todo.id} {...todo} />
                    })
                    )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state.todos,state.filters)
    }
}

export default connect(mapStateToProps)(TodoList)