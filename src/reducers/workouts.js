const workoutsReducerDefaultState = []

export default (state = workoutsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':  
            return [
                ...state,
                action.workout
            ]
            case 'SET_WORKOUTS':
            return action.workouts
        default:
            return state
    }
}