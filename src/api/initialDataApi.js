import * as productsTypes from '../context/productsContext/productsTypes';
import * as categoriesTypes from '../context/categoriesContext/categoriesTypes';
import { postRequest } from './api';

export const getInitialData = async (productDispatch, categoryDispatch) => {
  try {
    const initialData = await postRequest('http://localhost:3000/api/initialdata', {});

    const { products, categories } = initialData;

    productDispatch({
      type: productsTypes.GET_ALL_PRODUCTS_SUCCESS,
      payload: { products },
    });

    categoryDispatch({
      type: categoriesTypes.GET_ALL_CATEGORIES_SUCCESS,
      payload: { categories },
    });
  } catch (error) {
    console.log(error.message);
  }
};
