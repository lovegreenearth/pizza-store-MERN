import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAll from '../pages/SeeAll';
import Customization from "../../src/redux/container/appContainers";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';
import ChickenWings from '../pages/ChickenWing';
import CheckOut from '../pages/CheckOut';
import Combo from '../pages/Combo';
import ComboProduct from '../pages/ComboProduct';
import FileUpload from '../pages/FileUpload'

const Routing = () => {

    const [logged, setLogged] = useState(false);

    const changeLogged = () => {
        setLogged(true);
    }

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signIn' element={<SignIn onSuccess={changeLogged} />} />
            <Route path='/signup' element={<SignUp onSuccess={changeLogged} />} />
            <Route path="/see-all" element={logged ? <SeeAll /> : <Navigate to="/signIn" />} />
            <Route path="/customize" element={<Customization />} />
            <Route path="/chickenWings" element={<ChickenWings />} />
            <Route path="/CheckOut" element={logged ? <CheckOut /> : <Navigate to="/signIn" />} />
            <Route path='Product/:id' element={<Product />} />
            <Route path='Product/:id/Combo/:index' element={<Combo />} />
            <Route path='Product/:id/Combo/:index/ComboProduct/:combo' element={<ComboProduct />} />
            <Route path='/pic' element={<FileUpload />} />
        </Routes>
    )
    
}

export default Routing;