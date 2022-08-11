import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAll from '../pages/SeeAll';
import Customization from "../../src/redux/container/appContainers";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';

const Routing = () => {

    const [logged, setLogged] = useState(false);

    const changeLogged = () => {
        setLogged(true);
    }

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signin' element={<SignIn onSuccess={changeLogged} />} />
            <Route path='/signup' element={<SignUp onSuccess={changeLogged} />} />
            <Route path="/see-all" element={logged ? <SeeAll /> : <Navigate to="/signin" />} />
            <Route path="/customize" element={logged ? <Customization /> : <Navigate to="/signin" />} />
            <Route path='Product/:id' element={<Product />} />
        </Routes>
    )
    
}

export default Routing;