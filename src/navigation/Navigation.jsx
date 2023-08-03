import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//! Pages and Components as router

import Home from "../pages/Home";
import IndoorDetail from "../pages/IndoorDetail";
import Fruit from "../pages/Fruite";
import Flower from "../pages/Flower";
import FruitDetail from "../pages/FruitDetail";
import AddToCart from "../pages/AddToCart";
import FlowerDetail from "../pages/FlowerDetail";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/indoor-plant-detail" Component={IndoorDetail} />
        <Route path="/flower" Component={Flower} />
        <Route path="/fruit" Component={Fruit} />
        <Route path="/fruit-detail" Component={FruitDetail} />
        <Route path="/add-to-cart" Component={AddToCart} />
        <Route path="/flower-detail" Component={FlowerDetail} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
