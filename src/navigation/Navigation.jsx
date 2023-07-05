import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"

//! Pages and Components as router

import Home from "../pages/Home"
import IndoorDetail from '../pages/IndoorDetail'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path="/detail" Component={IndoorDetail}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation