import React, { useState } from 'react'
import { startAddTodo } from '../actions/todos'
import TodoForm from './TodoForm'
import { connect } from 'react-redux'

const AddTodoPage = (props) => {

    const onSubmit = (todo) => {
        props.startAddTodo(todo)
        props.history.push('/todo')
    }

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Todo</h1>
                </div>
            </div>
            <div className="content-container">
                <TodoForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        startAddTodo: (todo) => dispatch(startAddTodo(todo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage)

