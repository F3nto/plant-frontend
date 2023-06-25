import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"

//! Pages and Components as router

import Home from "../pages/Home"

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation