import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"

//! Pages and Components as router

import Home from "../pages/Home"
import IndoorDetail from '../pages/IndoorDetail'
import Fruit from '../pages/Fruite'
import Flower from '../pages/Flower'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path="/detail" Component={IndoorDetail}/>
            <Route path="/fruit" Component={Fruit}/>
            <Route path="/flower" Component={Flower}/>
           
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation