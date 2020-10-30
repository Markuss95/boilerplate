import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment';

const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '')
    const [amount, setAmount] = useState(props.expense ? props.expense.amount : '')
    const [date, setDate] = useState(props.expense ? moment(props.expense.date) : moment())
    const [calendarFocused, setCalendarFocus] = useState(false)
    const [note, setNote] = useState(props.expense ? props.expense.note : '')
    const [error, setError] = useState('')

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleAmountChange = (e) => {

        if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/))
            setAmount(e.target.value)
    }
    const handleDateChange = (date) => {
        setDate(moment(date));
    }
    const handleFocusChange = (focus) => {
        setCalendarFocus(focus.focused)
    }
    const handleNoteChange = (e) => {
        setNote(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !description) {
            setError('Please make sure your description and amount are filled')
        } else {
            setError('')
            props.onSubmit({
                description,
                amount,
                date: date.valueOf(),
                note
            })
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            {<p className="form__error">{error}</p>}
            <input className="text-input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <input className="text-input"
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={handleAmountChange}
            />
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={handleDateChange} // PropTypes.func.isRequired
                focused={calendarFocused} // PropTypes.bool
                onFocusChange={handleFocusChange} // PropTypes.func.isRequired
                isOutsideRange={() => false}
                numberOfMonths={1}
            />
            <textarea className="textarea"
                type="text"
                value={note}
                onChange={handleNoteChange}
            />
            <div>
            <button className="button">Save Expense</button>
            </div>
        </form>
    )

}

export { ExpenseForm as default }