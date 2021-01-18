import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

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

const MyInput = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = ({ target: { value } }) => {
    props.typingName(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input action="" value={props.currentName} onChange={inputHandler} type="text" />
      <input type="button" value="Submit" />
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(MyInput);