import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux'
import {setStartDate,setEndDate} from '../actions/workoutfilters'

const WorkoutFilters = (props) => {
    const [calendarFocused, setCalendarFocus] = useState(null)

    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    }
    const onFocusChange = (calendarFocused) => {
        setCalendarFocus(calendarFocused)
    }
    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
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
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={props.workoutFilters.startDate}
                        endDate={props.workoutFilters.endDate}
                        onDatesChange={onDatesChange}
                        focusedInput={calendarFocused}
                        onFocusChange={onFocusChange}
                        showClearDates={false}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        workoutFilters: state.workoutFilters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutFilters)