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
  dispatch(typingStarted());
  try {
    const res = await axios.get(url);
    const data = JSON.parse(res);
    const matchUsers = data
      .filter((user) => user.username.includes(value));
    console.log('data=>', data);
    typingSuccess(matchUsers);
  } catch (err) {
    typingFailure(err.message);
  }
};