import React from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"

//! Pages and Components as router

import Header from '../components/Header'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Header}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation