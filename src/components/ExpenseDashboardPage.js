import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import ListFilters from './ListFilters'

const ExpenseDashboardPage = () => (
  <div>
  <ExpenseSummary />
  <ListFilters /> 
  <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
