import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAll from '../pages/SeeAll';
import Customization from '../pages/Customization';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routing = () => {

    useEffect(() => {
        if (!localStorage.getItem('logged')) {
            localStorage.setItem('logged', false);
        }
    },[]);

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/see-all" element={localStorage.getItem('logged') === true ? <SeeAll /> : <Navigate to="/signin" />} />
            <Route path="/customize" element={localStorage.getItem('logged') === true ? <Customization /> : <Navigate to="/signin" />} />
        </Routes>
    )
    
}

export default Routing;