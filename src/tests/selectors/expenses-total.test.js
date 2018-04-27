import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const result = selectExpensesTotal([]);
	expect(result).toBe(0);
});

test('should add up a single expense', () => {
	const result = selectExpensesTotal([expenses[1]]);
	expect(result).toBe(expenses[1].amount);
});

test('should add up multiple expenses', () => {
	const result = selectExpensesTotal(expenses);
	const expected = expenses
		.map((expense) => expense.amount)
		.reduce((acc, cur) => acc + cur, 0);
	expect(result).toBe(expected);
});