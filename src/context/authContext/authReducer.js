import { authInitialState } from './authInitialState';
import * as authTypes from './authTypes';

export const authReducer = (state, action) => {
  switch (action.type) {
    // signin
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: null,
        message: '',
      };

    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
        authenticating: false,
      };

    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        authenticate: false,
        authenticating: false,
      };

    // logout
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: '',
      };

    case authTypes.LOGOUT_SUCCESS:
      return { ...authInitialState };

    case authTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // signup
    case authTypes.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: '',
      };

    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };

    case authTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
  }

  return state;
};
