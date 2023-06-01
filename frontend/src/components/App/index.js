import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './style.scss'

import Layout from '../../pages/Layout';
import Home from '../../pages/Home'
import Roster from '../../pages/Roster'



function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="roster" element={<Roster />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


};

export default App;

