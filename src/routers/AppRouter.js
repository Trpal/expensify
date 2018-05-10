import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={LoginPage} exact={true}/>
				<Route path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage} exact={true}/>
				<Route path="/edit/:id" component={EditExpensePage} exact={true}/>
				<Route path="/help" component={HelpPage} exact={true}/>
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;