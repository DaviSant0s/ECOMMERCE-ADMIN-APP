import { createContext, useContext, useReducer } from 'react';
import { authReducer } from './authReducer';
import { authInitialState } from './authInitialState';

const authGlobalContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <authGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </authGlobalContext.Provider>
  );
}

export const useAuth = () => useContext(authGlobalContext);
