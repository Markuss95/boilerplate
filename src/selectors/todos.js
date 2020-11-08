export default (todos, { text, startDate, endDate,todoSortBy }) => {
    return (todos.filter((todo) => {
        const completionMatch = todo.completion === todoSortBy
        const startDateMatch = todo.date >= startDate
        const endDateMatch = todo.date <= endDate
        const textMatch = todo.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch && completionMatch
    })).sort((a,b) => a.date -b.date)
}

