import moment from 'moment';
import { setStartDate,
	setEndDate,
	setTextFilter,
	sortByDate,
	sortByAmount
 	} from '../../actions/filters';

test('SHould generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('Should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
});

test('Should generate sortbyamount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('Should generate SortbyDate action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('Should generate empty setTextFilter action object', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('Should generate setTextFilter action object with given values', () => {
	const text = 'test';
	const action = setTextFilter('test');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

