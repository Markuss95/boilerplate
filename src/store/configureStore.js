import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import todosReducer from '../reducers/todos';
import workoutFiltersReducer from '../reducers/workoutFilters'
import workoutsReducer from '../reducers/workouts'
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            todos: todosReducer,
            workoutFilters: workoutFiltersReducer,
            workouts: workoutsReducer,
            auth: authReducer
        }),
        composeEnchancers (applyMiddleware(thunk))
        );
        return store;
};
