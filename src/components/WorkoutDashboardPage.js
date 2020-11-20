import React from 'react'
import WorkoutSummary from './WorkoutSummary'
import WorkoutFilters from './WorkoutFilters'

const WorkoutDashboardPage = () => {
    return (
        <div>
        <WorkoutSummary />
        <WorkoutFilters />
        </div>
    )
}

export {WorkoutDashboardPage as default}