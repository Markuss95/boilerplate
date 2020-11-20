import moment from 'moment'

const workoutFilterReducerDefaultState = {
    exerciseName: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = workoutFilterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}