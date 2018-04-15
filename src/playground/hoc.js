import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>info</h1>
		<p>The info is {props.info}, {props.additional}</p>
	</div>
);


const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is private info. Please don't share</p> }
			<WrappedComponent { ...props }/>
		</div>
	);
};


const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? (
				<WrappedComponent { ...props  } />
			) : (
				<p>Login is required</p>
			) }
		</div>
	)
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" additional="paska"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" additional="paska"/>, document.getElementById('app'));