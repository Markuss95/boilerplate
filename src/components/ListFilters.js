import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, todoSortByActive, todoSortByCompleted } from '../actions/filters';


const ListFilters = (props) => {
    const [calendarFocused, setCalendarFocus] = useState(null)
    const location = useLocation();

    const onTextChange = (e) => {
        props.setTextFilter(e.target.value)
    }
    const onSortChange = (e) => {
        if (e.target.value === 'date') {
            props.sortByDate();
        } else if (e.target.value === 'amount') {
            props.sortByAmount();
        }
    }
    const onTodoSortChange = (e) => {
        if (e.target.value === 'active') {
            props.todoSortByActive()
        } else if (e.target.value === 'completed') {
            props.todoSortByCompleted()
        }
    }
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
                    {location.pathname === '/todo'
                        ? <input className="text-input"
                            type='text'
                            placeholder="Search for Todo"
                            value={props.filters.text}
                            onChange={onTextChange}
                        />
                        : <input className="text-input"
                            type='text'
                            placeholder="Search for Expense"
                            value={props.filters.text}
                            onChange={onTextChange}
                        />}
                </div>

                {location.pathname === '/todo'
                    ? <div className="input-group__item"
                    >
                        <select className="select"
                            onChange={onTodoSortChange}
                            value={props.filters.todoSortBy}
                        >
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    : <div className="input-group__item">
                        <select className="select"
                            value={props.filters.sortBy}
                            onChange={onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                }

                <div className="input-group__item">
                    <DateRangePicker
                        startDate={props.filters.startDate}
                        endDate={props.filters.endDate}
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
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        todoSortByActive: () => dispatch(todoSortByActive()),
        todoSortByCompleted: () => dispatch(todoSortByCompleted())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)