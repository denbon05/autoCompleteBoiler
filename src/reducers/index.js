import { combineReducers } from 'redux';

const form = (
  state = { currentValue: '', users: [], error: null },
  action
) => {
  console.log('action=>', action);
  switch (action.type) {
    case 'TYPING_STARTED':
      state.currentValue = action.payload.value;
      return state;
    case 'TYPING_SUCCESS':
      state.users = action.payload.users;
      return state;
    case 'TYPING_FAILURE':
      state.error = action.payload.error;
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  form,
});
