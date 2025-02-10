import { categoriesInitialState } from './categoriesInitialState';
import * as categoriesTypes from './categoriesTypes';

export const categoriesReducer = (state, action) => {

    switch (action.type) {
        // get
        case categoriesTypes.GET_ALL_CATEGORIES_REQUEST:
            return { 
                ...categoriesInitialState, 
                loading: true,
                error: null
            }

        case categoriesTypes.GET_ALL_CATEGORIES_SUCCESS:
            return { 
                ...state, 
                categories: action.payload.categories,
                loading: false
            }
        
        case categoriesTypes.GET_ALL_CATEGORIES_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }
        
        // create
        case categoriesTypes.CREATE_CATEGORIES_REQUEST:
            return { 
                ...state, 
                loading: true,
                error: null
            }

        case categoriesTypes.CREATE_CATEGORIES_SUCCESS:
            return { 
                ...state, 
                loading: false
            }
        
        case categoriesTypes.CREATE_CATEGORIES_FAILURE:
            return { 
                ...state, 
                loading: false,
                error: action.payload.error
            }
    }

    return state;
}
