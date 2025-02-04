import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import PrivateRoute from '../components/HOC/PrivateRoute';

export const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRoute element={Home}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/Signin' element={<Signin/>}/>
                <Route path='/Signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}