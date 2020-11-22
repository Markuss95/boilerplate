export default (workouts, {sortBy, startDate, endDate}) => {
    return (workouts.filter((workout) => {
        const exerciseMatch = workout.exercise === sortBy
        const startDateMatch = workout.date >= startDate
        const endDateMatch = workout.date <= endDate
        return startDateMatch && endDateMatch && exerciseMatch
    })).sort((a,b) => a.date -b.date)
}
