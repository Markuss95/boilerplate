import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


const ExpenseListFilters = (props) => {
    const [calendarFocused, setCalendarFocus] = useState(null)

    const onTextChange = (e) => {
        props.setTextFilter(e.target.value)
    }
    const onSortChange = (e) => {
        if (e.target.value === 'date') {
            props.sortByDate();
        } else if (e.target.value === 'amount') {
            props.sortByAmount();
        }
    };
    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate)
        props.setEndDate(endDate)
    }
    const onFocusChange = (calendarFocused) => {
        setCalendarFocus(calendarFocused)
    }

    return (
        <div>
            <input
                type='text'
                placeholder="Search for Expense"
                value={props.filters.text}
                onChange={onTextChange}
            />
            <select
                value={props.filters.sortBy}
                onChange={onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker
                startDate={props.filters.startDate}
                endDate={props.filters.endDate}
                onDatesChange={onDatesChange}
                focusedInput={calendarFocused}
                onFocusChange={onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)