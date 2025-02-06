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
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}