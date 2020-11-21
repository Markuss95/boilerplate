import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const WorkoutListItem = ({ sets, reps, weight, date, exercise, id }) => {
    const volume = reps*weight
    return (
        <div>
            <Link className="list-item" to={`/edit/workout/${id}`}>
                <div>
                    <h3 className="list-item__title">{exercise}</h3>
                    <span className="list-item__sub-title">{moment(date).format('MMMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__data">{volume}</h3>
            </Link>
        </div>
    )
}

export { WorkoutListItem as default }