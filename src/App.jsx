import { useEffect } from 'react';
import './App.css'
import { RoutesApp } from './routes'
import { useAuth } from './context/authContext/authProvider';
import { isUserLoggedIn } from './api/authApi';

function App() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    
    if(!state.authenticate){
      isUserLoggedIn(dispatch);
    }

  }, []);

  return (
    <div className='appContainer'>
      <RoutesApp/>
    </div>
  )
}

export default App
