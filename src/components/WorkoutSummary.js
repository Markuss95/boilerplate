import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutSummary = () => {
    return (
        <div className="page-header">
            <div className="content-container">
            <Link className="button" to="/createtodo">Add a Workout</Link>
            </div>
        </div>
    )
}

export {WorkoutSummary as default}