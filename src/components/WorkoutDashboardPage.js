import React from 'react'
import WorkoutSummary from './WorkoutSummary'
import WorkoutFilters from './WorkoutFilters'
import WorkoutList from './WorkoutList'

const WorkoutDashboardPage = () => {
    return (
        <div>
        <WorkoutSummary />
        <WorkoutFilters />
        <WorkoutList />
        </div>
    )
}

export {WorkoutDashboardPage as default}