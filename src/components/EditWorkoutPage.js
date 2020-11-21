import React from 'react'
import WorkoutForm from './WorkoutForm'
import {startEditWorkout,startRemoveWorkout} from '../actions/workouts'
import {connect} from 'react-redux'

const EditWorkoutPage = (props) => {

    const onSubmit = (updates) =>{
        props.startEditWorkout(props.match.params.id, updates)
        props.history.push('/workout');
    }
    const handleRemove = () => {
        props.startRemoveWorkout(props.match.params.id)
        props.history.push('/workout');
    }
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Exercise Log</h1>
                </div>
            </div>
            <div className="content-container">
                <WorkoutForm workout={props.workout} onSubmit={onSubmit} />
                <div className="form__remove">
                <button className="button button--secondary" onClick={handleRemove}>Remove Log</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        workout: state.workouts.find((workout) => workout.id === ownProps.match.params.id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        startEditWorkout: (id,updates) => dispatch(startEditWorkout(id,updates)),
        startRemoveWorkout: (id) => dispatch(startRemoveWorkout(id))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(EditWorkoutPage)