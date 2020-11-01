import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import 'numeral/locales/fr'

numeral.locale('fr');
const ExpenseSummary = (props) => {
    const numberOfExpenses = props.expenses.length;
    const arrayOfAmounts = props.expenses.map((expense) => {
        return parseInt(expense.amount)
    })
    const sumOfAmounts = numeral(arrayOfAmounts.reduce((a, b) => {
        return a + b
    }, 0)).format('$0,0.00')

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing total of<span> {numberOfExpenses}</span> expenses totaling <span>{sumOfAmounts}</span></h1>
                <div >
                    <Link className="button" to="/createExpense">Add Expense</Link>
                    <Link className="button button--tertiary" to="/todo">View Todo List</Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseSummary)