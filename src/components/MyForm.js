import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import '../styles/MyForm.css';

const mapStateToProps = (state) => {
  const { users, currentValue, error } = state.form;
  return {
    users,
    currentValue,
    error,
  };
};

const actionCreators = {
  typingName: actions.typingName,
};

const MyInput = ({ users, error, currentValue, typingName }) => {
	useEffect(() => {
		document.querySelector('.FormInput').focus();
	})

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = ({ target: { value } }) => {
    typingName(value);
	};
	
	const renderMatchedUsers = () => users.map(({ id, username }) => (
		<li key={id} className="MatcherUser">{username}</li>
	));

	return (
		<form className="MyForm" autoComplete="off" onSubmit={submitHandler}>
			<div className="FormAutocomplete">
				<input className="FormInput" value={currentValue} onChange={inputHandler} type="text" />
				<ul className="MatchedUsers">{renderMatchedUsers()}</ul>
			</div>
			<input className="FormButton" type="button" value="Submit" />
		</form>
  );
};

export default connect(mapStateToProps, actionCreators)(MyInput);