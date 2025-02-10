import * as categoriesTypes from "../context/categoriesContext/categoriesTypes";
import { postRequest, getRequest, postFormDataRequest } from "./api";


export const getAllCategories = async (dispatch) => {

    dispatch({ type: categoriesTypes.GET_ALL_CATEGORIES_REQUEST});

    try {

        const data = await getRequest('http://localhost:3000/api/category/getCategories');

        dispatch({ 
            type: categoriesTypes.GET_ALL_CATEGORIES_SUCCESS, 
            payload: { categories: data.categoryList}
        });

        console.log(data.categoryList)
        
    } catch (error) {

        dispatch({ 
            type: categoriesTypes.GET_ALL_CATEGORIES_FAILURE, 
            payload: { error: error.message}
        });
        
    }

}

export const createCategories = async (categoryData, dispatch) => {

    dispatch({ type: categoriesTypes.CREATE_CATEGORIES_REQUEST});

    try {

        const res = await postFormDataRequest('http://localhost:3000/api/category/create', categoryData);

        dispatch({ type: categoriesTypes.CREATE_CATEGORIES_SUCCESS });
        
    } catch (error) {

        dispatch({ 
            type: categoriesTypes.CREATE_CATEGORIES_FAILURE, 
            payload: { error: error.message }
        });
        
    }

}

