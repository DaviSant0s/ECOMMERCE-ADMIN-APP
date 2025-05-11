import { productsInitialState } from './productsInitialState';
import * as productsTypes from './productsTypes';

export const productsReducer = (state, action) => {
  switch (action.type) {
    // get
    case productsTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...productsInitialState,
        loading: true,
        error: null,
      };

    case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };

    case productsTypes.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // create
    case productsTypes.CREATE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case productsTypes.CREATE_PRODUCTS_SUCCESS:
      const product = action.payload.product;
      const updatedProducts = state.products;
      updatedProducts.push(product);

      return {
        ...state,
        products: updatedProducts,
        loading: false,
      };

    case productsTypes.CREATE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
  }

  return state;
};
