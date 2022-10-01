import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import Home from '../components/Home'
import LogOut from '../components/LogOut'
import ProductViewer from '../components/ProductViewer'
import Purchases from '../components/Purchases'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

interface Props { }

function Protector() {
    const token = localStorage.getItem('session');

    return token !== null ? <Outlet /> : <Navigate to='/' />;
}

const Body = (props: Props) => {
    return (
        <div className='p-5 flex justify-center flex-wrap gap-3'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />

                <Route element={<Protector />}>
                    <Route path='/logout' element={<LogOut />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/purchases' element={<Purchases />} />
                </Route>
                <Route path='/product/:id' element={<ProductViewer />} />
            </Routes>
        </div>
    )
}

export default Body