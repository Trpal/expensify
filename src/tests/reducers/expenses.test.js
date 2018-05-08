import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('SHould not remove if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'new ting',
		note: '',
		amount: 1,
		createdAt: 0
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			description: 'edited ting',
			amount: 5000
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0],
		 {...expenses[1], description: action.updates.description, amount: action.updates.amount },
		  expenses[2]]);
});

test('should not edit expenses if no id is found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '25',
		updates: {
			description: 'test',
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});

test('should remove expense from firebase', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});