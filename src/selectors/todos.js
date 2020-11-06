export default (todos, { text, startDate, endDate }) => {
    return (todos.filter((todo) => {
        const startDateMatch = todo.date >= startDate
        const endDateMatch = todo.date <= endDate
        const textMatch = todo.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    })).sort((a,b) => a.date -b.date)
}

