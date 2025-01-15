import * as authTypes from './authTypes';

export const authReducer = (state, action) => {

    switch (action.type) {
        case authTypes.LOGIN_REQUEST:
            return { ...state, authenticating: true }

        case authTypes.LOGIN_SUCCESS:
            return { 
                ...state, 
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false,
            }
                
    }
}
