import React from 'react'
import { connect } from 'react-redux'
import WorkoutForm from './WorkoutForm'
import { startAddWorkout } from '../actions/workouts'

const AddWorkoutPage = (props) => {
    console.log(props.workouts)
    const onSubmit = (workout) => {
        props.startAddWorkout(workout)
        props.history.push('/workout')
    }
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Create an Exercise Log</h1>
                </div>
            </div>
            <div className="content-container">
                <WorkoutForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workouts,
        expenses: state.expenses
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        startAddWorkout: (workout) => dispatch(startAddWorkout(workout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutPage)