import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { useGlobalMaker } from "react-simplify"
import Home from "./components/Home";
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { IProduct, IResponse, TProducts } from "./models";


function App() {
    const session = localStorage.getItem('session');

    useGlobalMaker({
        name: 'session',
        initialState: session,
        modifiers: {}
    });

    axios.defaults.headers.common['Authorization'] = (session && `Bearer ${session}`)!;

    return (
        <div className='w-10/12 mx-auto h-screen flex flex-col divide-y divide-stone-400'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App
