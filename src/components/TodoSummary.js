import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import selectTodos from '../selectors/todos'

const TodoSummary = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing total of <span>{props.todos.length}</span> uncompleted tasks</h1>
                    <Link className="button" to="/createtodo">Create a New Todo</Link>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state.todos,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoSummary)