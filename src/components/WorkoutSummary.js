import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import WorkoutModal from './WorkoutModal'
const WorkoutSummary = (props) => {
    const selectedExercise = props.workoutFilters.sortBy
    const [chartSelected, setChartSelected] = useState(false)
    const handleClick = () => {
        setChartSelected(true)
    }
    const handleClickClose = () => {
        setChartSelected(false)
    }
    return (
        <div className="page-header">
            <div className="content-container">
                <Link className="button" to="/createworkout">Log an Exercise</Link>
                <WorkoutModal chartSelected={chartSelected} handleClickClose={handleClickClose} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        workoutFilters: state.workoutFilters
    }
}

export default connect(mapStateToProps)(WorkoutSummary)