import * as authTypes from '../context/authContext/authTypes';
import { postRequest } from './api';

export const login = async (userCredentials, dispatch) => {
  dispatch({ type: authTypes.LOGIN_REQUEST });

  try {
    const data = await postRequest('http://localhost:3000/api/admin/signin', userCredentials);

    console.log(data);

    if (!data || !data.token || !data.user) {
      throw new Error('Invalid response from server');
    }

    const { token, user } = data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: authTypes.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } catch (error) {
    dispatch({ type: authTypes.LOGIN_FAILURE, payload: { error: error.message } });
  }
};

export const signup = async (userCredentials, dispatch) => {
  dispatch({ type: authTypes.SIGNUP_REQUEST });

  try {
    const data = await postRequest('http://localhost:3000/api/admin/signup', userCredentials);

    if (!data) {
      throw new Error('Invalid response from server');
    }

    const { message } = data;

    dispatch({ type: authTypes.SIGNUP_SUCCESS, payload: { message } });
  } catch (error) {
    dispatch({ type: authTypes.SIGNUP_FAILURE, payload: { error: error.message } });
  }
};

export const isUserLoggedIn = async (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch({
      type: authTypes.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  } else {
    dispatch({ type: authTypes.LOGIN_FAILURE, payload: { error: 'Failed to login' } });
  }
};

export const signout = async (dispatch) => {
  dispatch({ type: authTypes.LOGOUT_REQUEST });

  try {
    const res = await postRequest('http://localhost:3000/api/admin/signout', {});

    localStorage.clear();
    dispatch({ type: authTypes.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: authTypes.LOGOUT_FAILURE, payload: { error: error.message } });
  }
};
