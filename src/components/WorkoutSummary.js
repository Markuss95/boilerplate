import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutSummary = () => {
    return (
        <div className="page-header">
            <div className="content-container">
            <Link className="button" to="/createworkout">Log an Exercise</Link>
            </div>
        </div>
    )
}

export {WorkoutSummary as default}