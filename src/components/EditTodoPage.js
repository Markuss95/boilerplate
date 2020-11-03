import React from 'react'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import { startEditTodo, startRemoveTodo } from '../actions/todos'

const EditTodoPage = (props) => {

    const onSubmit = (todo) => {
        props.startEditTodo(props.match.params.id, todo)
        props.history.push('/todo');
    }
    const onRemove = () => {
        props.startRemoveTodo(props.match.params.id)
        props.history.push('/todo');
    }

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Todo</h1>
                </div>
            </div>
            <div className="content-container">
                <TodoForm todo={props.todo} onSubmit={onSubmit} />
                <button className="button button--secondary" onClick={onRemove}>Remove Todo</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        todo: state.todos.find((todo) => todo.id === ownProps.match.params.id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        startEditTodo: (id, updates) => dispatch(startEditTodo(id, updates)),
        startRemoveTodo: (id) => dispatch(startRemoveTodo(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage)