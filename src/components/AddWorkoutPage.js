import React from 'react'
import WorkoutForm from './WorkoutForm'

const AddWorkoutPage = () => {
    return (
        <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Create an Exercise Log</h1>
            </div>
        </div>
        <div className="content-container">
        <WorkoutForm />
        </div>
    </div>
    )
}

export {AddWorkoutPage as default}