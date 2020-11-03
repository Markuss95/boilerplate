import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const TodoListItem = ({id, description, date }) => {
    return (
        <Link to= {`edit/todo/${id}`}>
            <div>{description}</div>
            <div>{moment(date).format('Do MMM YYYY')}</div>
        </Link>
    )
}

export { TodoListItem as default }