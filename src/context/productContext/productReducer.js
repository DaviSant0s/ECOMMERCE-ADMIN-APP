import { productInitialState } from './productInitialState';
import * as productTypes from './productTypes';

export const productReducer = (state, action) => {

    switch (action.type) {
        // signin
        case productTypes.LOGIN_REQUEST:
            return { 
                ...state, 
            }

        case productTypes.LOGIN_SUCCESS:
            return { 
                ...state, 
            }
        
        case productTypes.LOGIN_FAILURE:
            return { 
                ...state, 
            }
        
        // logout
        case productTypes.LOGOUT_REQUEST:
            return { 
                ...state, 
            }

        case  productTypes.LOGOUT_SUCCESS:
            return { ...productInitialState}
        
        case productTypes.LOGOUT_FAILURE:
            
            return {
                ...state,
            }

        // signup
        case productTypes.SIGNUP_REQUEST:
            return { 
                ...state, 
            }
        
        case productTypes.SIGNUP_SUCCESS:
            return { 
                ...state, 
            }
        
        case productTypes.SIGNUP_FAILURE:
            return { 
                ...state, 
            }
       
    }

    return state;
}
