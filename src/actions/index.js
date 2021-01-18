import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const typingStarted = (value) => ({
  type: 'TYPING_STARTED',
  payload: { value },
});

const typingSuccess = (users) => ({
  type: 'TYPING_SUCCESS',
  payload: { users },
});

const typingFailure = (error) => ({
  type: 'TYPING_FAILURE',
  payload: {
    error
  }
});

export const typingName = (value) => async (dispatch) => {
  dispatch(typingStarted(value));
  try {
		const { data } = await axios.get(url);
    const matchUsers = data
			.filter((user) => user.username
				.toLowerCase()
				.includes(value.toLowerCase()));
			console.log('matchUsers=>', matchUsers);
    dispatch(typingSuccess(matchUsers));
  } catch (err) {
    dispatch(typingFailure(err.message));
  }
};