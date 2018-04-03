import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		<div>
			this is edit expense page for an expense with id of { props.match.params.id }
		</div>
	)
};

export default EditExpensePage;