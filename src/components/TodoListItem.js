import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const TodoListItem = ({ id, description, date }) => {
    return (
        <Link className="list-item"
         to={`edit/todo/${id}`}>
            <h4>{description}</h4>
            <h4>{moment(date).format('Do MMM YYYY')}</h4>
        </Link>
    )
}

export { TodoListItem as default }