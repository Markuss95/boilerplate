import React from 'react'
import { connect } from 'react-redux'
import WorkoutListItem from './WorkoutListItem'

const WorkoutList = (props) => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div>Exercise</div>
                <div>Volume</div>
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts
    }
}

export default connect(mapStateToProps)(WorkoutList)