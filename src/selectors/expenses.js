import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const dateOfExpense = (moment(expense.date).format("MM/DD/YYYY"))
        const filterStartDate = (startDate.format("MM/DD/YYYY"))
        const filterEndDate = (endDate.format('MM/DD/YYYY'))
        const startDateMatch = startDate ? moment(dateOfExpense).isSameOrAfter(filterStartDate,'day') : true
        const endDateMatch = endDate? moment(dateOfExpense).isSameOrBefore(filterEndDate,'day') : true
        const textMatch  = text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'amount'){
            return b.amount - a.amount
        }else if(sortBy === 'date'){
            return a.date < b.date ? 1 : -1;
        }

    })
}