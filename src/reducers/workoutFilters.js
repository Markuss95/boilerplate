import moment from 'moment'
const workoutFilterReducerDefaultState = {
    sortBy: 'Barbell Bench Press',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('year')
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
        case 'SORT_BY_BENCH_PRESS':
            return {
                ...state,
                sortBy: 'Barbell Bench Press'
            }
        case 'SORT_BY_DUMBELL_PRESS':
            return {
                ...state,
                sortBy: 'Incline Dumbell Press'
            }
        case 'SORT_BY_OVERHEAD_PRESS':
            return {
                ...state,
                sortBy: 'Overhead Press'
            }
        case 'SORT_BY_ARNOLD_PRESS':
            return {
                ...state,
                sortBy: 'Arnold Press'
            }
        case 'SORT_BY_ROWS':
            return {
                ...state,
                sortBy: 'Bent Over Rows'
            }
        case 'SORT_BY_DEADLIFTS':
            return {
                ...state,
                sortBy: 'Deadlifts'
            }
        case 'SORT_BY_SQUATS':
            return {
                ...state,
                sortBy: 'Squats'
            }
        default:
            return state;
    }
}