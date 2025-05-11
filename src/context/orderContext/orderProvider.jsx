import { createContext, useContext, useReducer } from 'react';
import { orderReducer } from './orderReducer';
import { orderInitialState } from './orderInitialState';

const orderGlobalContext = createContext();

export default function OrderProvider({ children }) {
  const [orderState, orderDispatch] = useReducer(
    orderReducer,
    orderInitialState,
  );

  return (
    <orderGlobalContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </orderGlobalContext.Provider>
  );
}

export const useOrder = () => useContext(orderGlobalContext);
