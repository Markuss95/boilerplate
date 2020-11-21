import database from '../firebase/firebase';

// ADD A NEW WORKOUT
export const addWorkout = (workout) => ({
    type: "ADD_WORKOUT",
    workout
})

export const startAddWorkout = (WorkoutData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            sets,
            reps,
            weight,
            exercise,
            date
        } = WorkoutData
        const workout = { sets, reps, weight, exercise, date }
        return database.ref(`users/${uid}/workouts`).push(workout).then((ref) => {
            // console.log(ref.id)
            dispatch(addWorkout({
                id: ref.key,
                ...workout
            }))
        })
    }
}
// EDIT_WORKOUT
export const editWorkout = (id, updates) => ({
    type: 'EDIT_WORKOUT',
    id,
    updates
})

export const startEditWorkout = (id = '', updates = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/workouts/${id}`).update(updates).then((ref) => {
            dispatch(editWorkout(id, updates))
        })
    }
}
// REMOVE_WORKOUT
export const removeWorkout = ({ id }) => ({
    type: 'REMOVE_WORKOUT',
    id
})

export const startRemoveWorkout = ( id ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/workouts/${id}`).remove().then(() => {
            dispatch(removeWorkout({ id }))
        })
    }
}

//SET_WORKOUTS
export const setWorkouts = (workouts) => ({
    type: 'SET_WORKOUTS',
    workouts
})

export const startSetWorkouts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/workouts`)
            .once('value')
            .then((snapshot) => {
                const workouts = []
                snapshot.forEach((childSnapshot) => {
                    workouts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setWorkouts(workouts))
            })
    }
}