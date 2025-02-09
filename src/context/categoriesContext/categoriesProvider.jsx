import { createContext, useContext, useReducer } from 'react';
import { categoriesReducer } from './categoriesReducer';
import { categoriesInitialState } from './categoriesInitialState';

const categoriesGlobalContext = createContext();

export default function CategoriesProvider({ children }) {
    const [ categoryState, categoryDispatch ] = useReducer(categoriesReducer, categoriesInitialState);

  return (
    <categoriesGlobalContext.Provider value={{categoryState, categoryDispatch}}>
        { children }
    </categoriesGlobalContext.Provider>
  );
}


export const useCategories = () => useContext(categoriesGlobalContext);