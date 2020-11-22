import React from 'react'
import { connect } from 'react-redux'
import WorkoutListItem from './WorkoutListItem'
import selectWorkouts from '../selectors/workouts'

const WorkoutList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Exercises</div>
                <div className="show-for-desktop">Exercise</div>
                <div className="show-for-desktop">Volume</div>
            </div>
            <div className="list-body">
                {props.workouts.length === 0
                    ? <div className="list-item list-item--message">
                        No Workouts
                </div>
                    : (props.workouts.map((workout) => {
                        return <WorkoutListItem key={workout.id} {...workout} />
                    })
                    )}
            </div>
            <p className="page-header__title">* This is the first version, further improvements are on the way *</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: selectWorkouts(state.workouts, state.workoutFilters)
    }
}

export default connect(mapStateToProps)(WorkoutList)