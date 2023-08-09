import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
//! Pages and Components as router

import Home from "../pages/Home";
import IndoorDetail from "../pages/IndoorDetail";
import Fruit from "../pages/Fruite";
import Flower from "../pages/Flower";
import FruitDetail from "../pages/FruitDetail";
import AddToCart from "../pages/AddToCart";
import FlowerDetail from "../pages/FlowerDetail";
import RawMat from "../pages/RawMat";
import RawMatDetail from "../pages/RawMatDetail";

//! admin

import AdminDashboard from "../admin/AdminDashboard";
import AdminLogin from "../admin/AdminLogin";
import AdminFruitDetail from "../admin/AdminFruitDetail";
import AdminFlowerDetail from "../admin/AdminFlowerDetail";
import AdminRawMatDetail from "../admin/AdminRawMatDetail";
import AdminIndoorDetail from "../admin/AdminIndoorDetail";

const Navigation = () => {
  const [loginModal, setLoginModal] = useState(true);
  const isAuthenticated = useSelector(
    (state) => state.adminAuth.isAuthenticated
  );

  const handleCloseModal = () => {
    setLoginModal(false);
  };

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
        <Route path="/industrial-raw-material" Component={RawMat} />
        <Route
          path="/industrial-raw-material-detail"
          Component={RawMatDetail}
        />

        {isAuthenticated && (
          <Route path="/admin-dashboard" Component={AdminDashboard} />
        )}
        <Route
          path="/admin"
          element={
            <AdminLogin
              openAdminModal={loginModal}
              closeAdminModal={handleCloseModal}
            />
          }
        />
        <Route path="/admin-flower" Component={AdminFlowerDetail} />
        <Route path="/admin-fruit" Component={AdminFruitDetail} />
        <Route path="/admin-raw-material" Component={AdminRawMatDetail} />
        <Route path="/admin-indoor" Component={AdminIndoorDetail} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
