import * as productsTypes from '../context/productsContext/productsTypes';
import { getRequest, postFormDataRequest } from './api';

export const getAllProducts = async (dispatch) => {
  dispatch({ type: productsTypes.GET_ALL_PRODUCTS_REQUEST });

  try {
    const data = await getRequest('http://localhost:3000/api/product/getProducts');

    dispatch({
      type: productsTypes.GET_ALL_PRODUCTS_SUCCESS,
      payload: { products: data.products },
    });
  } catch (error) {
    dispatch({
      type: productsTypes.GET_ALL_PRODUCTS_FAILURE,
      payload: { error: error.message },
    });
  }
};

export const createProducts = async (productData, dispatch) => {
  dispatch({ type: productsTypes.CREATE_PRODUCTS_REQUEST });

  try {
    const data = await postFormDataRequest('http://localhost:3000/api/product/create', productData);

    dispatch({
      type: productsTypes.CREATE_PRODUCTS_SUCCESS,
      payload: { product: data.product },
    });
  } catch (error) {
    dispatch({
      type: productsTypes.CREATE_PRODUCTS_FAILURE,
      payload: { error: error.message },
    });
  }
};
