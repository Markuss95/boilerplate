const todosReducerDefaultState = []

export default (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'SET_TODOS':
            return action.todos
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates
                    }
                } else {
                    return todo
                }
            })
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        default:
            return state
    }
}