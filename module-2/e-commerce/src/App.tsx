import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import { useGlobalMaker } from "react-simplify"
import Home from "./components/Home";
import Body from "./layouts/Body";
import Header from "./layouts/Header";
import { IProduct, IResponse, TProducts } from "./models";


function App() {


    return (
        <div className='w-10/12 mx-auto h-screen flex flex-col divide-y divide-stone-400'>
            <Header />
            {/* <Body /> */}

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
