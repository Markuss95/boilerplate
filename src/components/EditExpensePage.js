import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const onSubmit = (updates) => {
        props.startEditExpense(props.match.params.id, updates)
        props.history.push('/');
    }

    const onRemove = () => {
        props.startRemoveExpense(props.match.params.id)
        props.history.push('/');

    }
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={onSubmit}
                />
                <button className="button button--secondary" onClick={onRemove}> Remove Expense</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);