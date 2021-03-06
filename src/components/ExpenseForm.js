import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note: '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		}
	}

	onFieldChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		this.setState(() => ({ [ name ]: value }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			// set error state equal to 'Please provide description and mount.'
			this.setState(() => ({error: 'Please provide description and amount'}))
		} else {
			this.setState(() => ( {error: ''} ))
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};

	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{(this.state.error.length > -1 && <p className="form__error">{this.state.error}</p>)}
				<input
					name="description"
					className="text-input"
					type="text"
					placeholder="description"
					autoFocus
					value={this.state.description}
					onChange={this.onFieldChange}
				/>
				<input
					name="amount"
					type="text"
					className="text-input"
					placeholder="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					name="note"
					className="textarea"
					placeholder="Add a note for your expense (optional)"
					value={this.state.note}
					onChange={this.onFieldChange}
				>
				</textarea>
				<div>
					<button className="button">Save expense</button>
				</div>
			</form>
		)
	}
}