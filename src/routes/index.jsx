import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import PrivateRoute from '../components/HOC/PrivateRoute';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Categories from '../pages/Categories';

export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRoute element={Home}/>}/>
                <Route path='/products' element={<PrivateRoute element={Products}/>}/>
                <Route path='/orders' element={<PrivateRoute element={Orders}/>}/>
                <Route path='/categories' element={<PrivateRoute element={Categories}/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}