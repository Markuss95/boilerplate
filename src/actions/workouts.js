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