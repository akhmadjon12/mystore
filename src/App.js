import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Shoes from './pages/Shoes';
import Accessories from './pages/Accessories';
import SignInPage from './pages/SignInPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LikedOnesPage from './pages/LikedOnesPage';
import Checkout from './pages/Checkout';
import UserDashboard from './pages/UserDashboard';

// import 'bootstrap'
import './Bootstrap/css/bootstrap.min.css'

function App () {
    return (
        <>
            <BrowserRouter >
                
                <NavbarComponent/>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/clothes' element={<Clothes />} />
                    <Route path='/shoes' element={<Shoes />} />
                    <Route path='/accessories' element={<Accessories />} />
                    <Route path='/sign-in' element={<SignInPage />} />
                    <Route path='/shopping-cart' element={<ShoppingCartPage />} />
                    <Route path='/likes' element={<LikedOnesPage />} />
                    <Route path='/shopping-cart/checkout' element={<Checkout />} />
                    <Route path='dashboard' element={<UserDashboard />} />
                    <Route path='*' element={<Home />} />
                </Routes>

                <Footer />

            </BrowserRouter>
        </>    
    );
}

export default App ;