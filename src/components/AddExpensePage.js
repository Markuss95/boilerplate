import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => {

    const onSubmit = (expense) => {
        props.startAddExpense(expense)
        props.history.push('/')
    }

    return (
        <div>
            <ExpenseForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage)