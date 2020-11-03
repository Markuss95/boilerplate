import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import TodoDasboard from '../components/TodoDashboard'
import AddTodoPage from'../components/AddTodoPage'
import EditTodoPage from '../components/EditTodoPage'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/createExpense" component={AddExpensePage} />
        <PrivateRoute path="/todo" component={TodoDasboard} />
        <PrivateRoute path="/createtodo" component={AddTodoPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
        <PrivateRoute path="/edit/todo/:id" component={EditTodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
