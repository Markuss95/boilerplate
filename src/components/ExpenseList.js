import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => {
    return (
        <div>
       { props.expenses.length === 0 ? (<span>No expenses</span>) : (
           props.expenses.map((expense) => {
              return <ExpenseListItem key= {expense.id} {...expense} />
           })
       )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseList)