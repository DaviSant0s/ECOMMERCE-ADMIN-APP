import { useEffect } from 'react';
import { RoutesApp } from './routes'
import { useAuth } from './context/authContext/authProvider';
import { isUserLoggedIn } from './api/authApi';
import { getAllCategories } from './api/categoriesApi';
import { useCategories } from './context/categoriesContext/categoriesProvider';
import { getAllProducts } from './api/productsApi';
import { useProducts } from './context/productsContext/productsProvider';

function App() {
  const { state, dispatch } = useAuth();
  const { categoryDispatch } = useCategories();
  const { productState, productDispatch } = useProducts();

  useEffect(() => {
    
    if(!state.authenticate){
      isUserLoggedIn(dispatch);
    }
    
    getAllCategories(categoryDispatch);

    getAllProducts(productDispatch);

  }, []);

  return (
    <div className='appContainer'>
      <RoutesApp/>
    </div>
  )
}

export default App
