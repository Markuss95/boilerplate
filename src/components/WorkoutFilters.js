import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux'
import {
    setStartDate, setEndDate, sortByBenchPress, sortByDumbellPress,
    sortByOverheadPress, sortByArnoldPress, sortByRows, sortByDeadlifts, sortBySquats
} from '../actions/workoutfilters'

const WorkoutFilters = (props) => {
    const [calendarFocused, setCalendarFocus] = useState(null)

    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    }
    const onFocusChange = (calendarFocused) => {
        setCalendarFocus(calendarFocused)
    }
    const onSortChange = (e) => {
        switch (e.target.value) {
            case ('Barbell Bench Press'):
                props.sortByBenchPress()
                break
            case ('Inclide Dumbell Press'):
                props.sortByDumbellPress()
                break
            case ('Overhead Press'):
                props.sortByOverheadPress()
                break
            case ('Arnold Press'):
                props.sortByArnoldPress()
                break
            case ('Bent Over Rows'):
                props.sortByRows()
                break
            case ('Deadlifts'):
                props.sortByDeadlifts()
                break
            case ('Squats'):
                props.sortBySquats()
                break
        }
    }
    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <select className="select"
                        onChange={onSortChange}
                    >
                        <option value="Barbell Bench Press">Barbell Bench Press</option>
                        <option value="Inclide Dumbell Press">Inclide Dumbell Press</option>
                        <option value="Overhead Press">Overhead Press</option>
                        <option value="Arnold Press">Arnold Press</option>
                        <option value="Bent Over Rows">Bent Over Rows</option>
                        <option value="Deadlifts">Deadlifts</option>
                        <option value="Squats" >Squats</option>
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
        setEndDate: (date) => dispatch(setEndDate(date)),
        sortByBenchPress: () => dispatch(sortByBenchPress()),
        sortByDumbellPress: () => dispatch(sortByDumbellPress()),
        sortByOverheadPress: () => dispatch(sortByOverheadPress()),
        sortByArnoldPress: () => dispatch(sortByArnoldPress()),
        sortByRows: () => dispatch(sortByRows()),
        sortByDeadlifts: () => dispatch(sortByDeadlifts()),
        sortBySquats: () => dispatch(sortBySquats())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutFilters)