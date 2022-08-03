import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAll from '../pages/SeeAll';
import Customization from '../pages/Customization';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routing = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" render={() => (localStorage.getItem('logged') ? <Navigate to="/see-all" /> : <SeeAll />)} />
        {/* <Route path='/customize' element={<Customize />} /> */}
        <Route path="/" render={() => (localStorage.getItem('logged') ? <Navigate to="/customize" /> : <Customization />)} />\
    </Routes>
)

export default Routing;