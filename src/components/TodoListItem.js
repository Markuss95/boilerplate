import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const TodoListItem = ({ id, description, date, completion }) => {
    return (
        <div>
        { completion === "active"
            ? <Link className="list-item__active"
                to={`edit/todo/${id}`}>
                <h4>{description}</h4>
                <h4>{moment(date).format('MMMM Do, YYYY')}</h4>
            </Link>
            : <Link className="list-item"
                to={`edit/todo/${id}`}>
                <h4>{description}</h4>
                <h4>{moment(date).format('MMMM Do, YYYY')}</h4>
            </Link>
    }
    </div>
       
    )
}

export { TodoListItem as default }