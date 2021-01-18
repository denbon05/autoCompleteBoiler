import { combineReducers } from 'redux';

const form = (
  state = { currentValue: '', users: [], error: null },
  action
) => {
  console.log('action=>', action);
  switch (action.type) {
		case 'TYPING_STARTED':
			const { value } = action.payload;
			const currentValue = value;
      return { ...state, currentValue }
		case 'TYPING_SUCCESS':
			const { users } = action.payload;
			return { ...state, users };
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
