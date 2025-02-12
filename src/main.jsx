import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/authContext/authProvider.jsx'
import CategoriesProvider from './context/categoriesContext/categoriesProvider.jsx'
import ProductsProvider from './context/productsContext/productsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductsProvider>
      <CategoriesProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CategoriesProvider>
    </ProductsProvider>
  </AuthProvider>
)
