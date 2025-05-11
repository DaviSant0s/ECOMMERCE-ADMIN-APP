import { orderInitialState } from './orderInitialState';
import * as orderTypes from './orderTypes';

export const orderReducer = (state, action) => {
  switch (action.type) {
    // signin
    case orderTypes.LOGIN_REQUEST:
      return {
        ...state,
        orderenticating: true,
        error: null,
        message: '',
      };

    case orderTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        orderenticate: true,
        orderenticating: false,
      };

    case orderTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        orderenticate: false,
        orderenticating: false,
      };

    // logout
    case orderTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: '',
      };

    case orderTypes.LOGOUT_SUCCESS:
      return { ...orderInitialState };

    case orderTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // signup
    case orderTypes.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: '',
      };

    case orderTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };

    case orderTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
  }

  return state;
};
