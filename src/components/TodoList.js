import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
    return (
        <div>
            {props.todos.length === 0 ?
                <div> There are no todos</div>
                :props.todos.map((todo) => {
                    return <TodoListItem key={todo.id} {...todo} />
                })}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)