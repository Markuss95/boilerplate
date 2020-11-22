export default (workouts, {sortBy}) => {
    return (workouts.filter((workout) => {
        const exerciseMatch = workout.exercise === sortBy
        return exerciseMatch
    }))
}
