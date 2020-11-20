import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

const WorkoutForm = () => {
    // const [date, setDate] = useState(props.todo ? moment(props.todo.date) : moment())
    const [date, setDate] = useState(moment())
    const [calendarFocused, setCalendarFocus] = useState(false)
    const [error, setError] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const handleDateChange = (date) => {
        setDate(moment(date));
    }
    const handleFocusChange = (focus) => {
        setCalendarFocus(focus.focused)
    }
    const handleSetChange = (e) => {
        if (e.target.value.match(/^[1-9]\d*$/)) {
            setSets(e.target.value)
        }
    }
    const handleRepChange = (e) => {
        if (e.target.value.match(/^[1-9]\d*$/)) {
            setReps(e.target.value)
        }
    }
    const handleWeightChange = (e) => {
        if (e.target.value.match(/^[1-9]\d*$/)) {
            setWeight(e.target.value)
        }
    }

    return (
        <form className="form">
            <p className="form__error"></p>
            <select className="select"
            >
                <option value="bench">Barbell Bench Press</option>
                <option value="completed">Inclide Dumbell Press</option>
                <option value="overhead">Overhead Press</option>
                <option value="arnold">Arnold Press</option>
                <option value="rows">Bent Over Rows</option>
                <option value="deadlifts">Deadlifts</option>
                <option value="squats" >Squats</option>
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