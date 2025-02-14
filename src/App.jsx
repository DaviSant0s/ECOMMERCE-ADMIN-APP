import { useEffect } from 'react';
import { RoutesApp } from './routes'
import { useAuth } from './context/authContext/authProvider';
import { isUserLoggedIn } from './api/authApi';
import { useCategories } from './context/categoriesContext/categoriesProvider';
import { useProducts } from './context/productsContext/productsProvider';
import { getInitialData } from './api/initialDataApi';

function App() {
  const { state, dispatch } = useAuth();
  const { categoryDispatch } = useCategories();
  const { productDispatch } = useProducts();

  useEffect(() => {
    
    if(!state.authenticate){
      isUserLoggedIn(dispatch);
    }

    getInitialData(productDispatch, categoryDispatch);

  }, []);

  return (
    <div className='appContainer'>
      <RoutesApp/>
    </div>
  )
}

export default App
