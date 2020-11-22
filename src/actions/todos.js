import database from '../firebase/firebase';
// ADD A NEW TODO
export const addTodo = (todo) => ({
    type: "ADD_TODO",
    todo
})

export const startAddTodo = (TodoData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description,
            date,
            completion
        } = TodoData
        const todo = { description, date,completion}
        return database.ref(`users/${uid}/todos`).push(todo).then((ref) => {
            dispatch(addTodo({
                id: ref.key,
                ...todo
            }))
        })
    }
}
// SET TODOS 
export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    todos
})

export const startSetTodos = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const todos = []
        return database.ref(`users/${uid}/todos`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                todos.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setTodos(todos))
        })
    }
}

//EDIT TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})

export const startEditTodo = (id = '', updates = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/todos/${id}`).update(updates).then((ref) => {
            dispatch(editTodo(id, updates))
        })
    }
}

//REMOVE TODO
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const startRemoveTodo = (id = '') => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/todos/${id}`).remove().then(() => {
            dispatch(removeTodo(id))
        })
    }
}