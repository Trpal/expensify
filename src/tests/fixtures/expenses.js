import moment from 'moment';

export default [{
	id: '1',
	description: 'Test',
	note: '',
	amount: 195,
	createdAt: 0
}, {
	id: '2',
	description: 'Rent',
	note: '',
	amount: 1900,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: '3',
	description: 'Vacation',
	note: '',
	amount: 150,
	createdAt: moment(0).add(4, 'days').valueOf()
}];