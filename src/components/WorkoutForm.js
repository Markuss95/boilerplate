import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

const WorkoutForm = (props) => {
    const [date, setDate] = useState(props.workout ? moment(props.workout.date) : moment())
    const [calendarFocused, setCalendarFocus] = useState(false)
    const [exercise, setExercise] = useState(props.workout?props.workout.exercise:'Barbell Bench Press')
    const [error, setError] = useState('')
    const [sets, setSets] = useState(props.workout?props.workout.sets:'')
    const [reps, setReps] = useState(props.workout?props.workout.reps:'')
    const [weight, setWeight] = useState(props.workout?props.workout.weight:'')

    const handleDateChange = (date) => {
        setDate(moment(date));
    }
    const handleFocusChange = (focus) => {
        setCalendarFocus(focus.focused)
    }
    const handleSetChange = (e) => {
        if (e.target.value.match(/^[-+]?(?:[0-9]+,)*[0-9]+(?:\.[0-9]+)?$/)) {
            setSets(e.target.value)
        }else {
            setSets('')
        }
    }
    const handleRepChange = (e) => {
        if (e.target.value.match(/^[1-9]\d*$/)) {
            setReps(e.target.value)
        }else {
            setReps('')
        }
    }
    const handleWeightChange = (e) => {
        if (e.target.value.match(/^[1-9]\d*$/)) {
            setWeight(e.target.value)
        }else {
            setWeight('')
        }
    }
    const handleSelect= (e) => {
        setExercise(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!reps || !weight){
            setError('Please make sure your input fields are not empty!')
        } else {
            setError('')
            props.onSubmit({
                sets,
                reps,
                weight,
                exercise,
                date: date.valueOf()
            })
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="form__error">{error}</p>
            <select value ={exercise} className="select" onChange={handleSelect}>
                <option value="Barbell Bench Press">Barbell Bench Press</option>
                <option value="Inclide Dumbell Press">Inclide Dumbell Press</option>
                <option value="Overhead Press">Overhead Press</option>
                <option value="Arnold Press">Arnold Press</option>
                <option value="Bent Over Rows">Bent Over Rows</option>
                <option value="Deadlifts">Deadlifts</option>
                <option value="Squats" >Squats</option>
            </select>

            <div className="form-input">
                <h3>Sets:</h3>
                <input className="text-input"
                    type="number"
                    value={sets}
                    onChange={handleSetChange}
                    placeholder="Number of sets"
                />
            </div>
            
            <div className="form-input">
                <h3>Reps:</h3>
                <input className="text-input"
                    type="number"
                    value={reps}
                    onChange={handleRepChange}
                    placeholder="Number of reps"
                />
            </div>
            <div className="form-input">
                <h3>Wght:</h3>
                <input className="text-input"
                    value={weight}
                    onChange={handleWeightChange}
                    type="number"
                    placeholder="Weight (in KGs)"
                />
            </div>
            <div className="form__date--secondary form-input">
                <h3 className="form__date__title">Creation date:</h3>
                <SingleDatePicker
                    date={date} // momentPropTypes.momentObj or null
                    onDateChange={handleDateChange} // PropTypes.func.isRequired
                    focused={calendarFocused} // PropTypes.bool
                    onFocusChange={handleFocusChange} // PropTypes.func.isRequired
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    disabled={false}
                    displayFormat="DD/MM/YYYY"
                />
            </div>

            <div className="form-button">
                <button className="button">Save Log</button>
            </div>
        </form>

    )
}

export { WorkoutForm as default }