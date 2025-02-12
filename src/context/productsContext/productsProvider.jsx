import { createContext, useContext, useReducer } from 'react';
import { productsReducer } from './productsReducer';
import { productsInitialState } from './productsInitialState';

const productsGlobalContext = createContext();

export default function ProductsProvider({ children }) {
    const [ productState, productDispatch ] = useReducer(productsReducer, productsInitialState);

  return (
    <productsGlobalContext.Provider value={{productState, productDispatch}}>
        { children }
    </productsGlobalContext.Provider>
  );
}


export const useProducts = () => useContext(productsGlobalContext);