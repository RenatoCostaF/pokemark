import React from "react";
import { Routes, Route } from "react-router-dom";

import Inventory from "../Pages/Inventory";
import Order from "../Pages/Order";
import PokeCart from "../Pages/PokeCart";
import Home from "../Pages/Home";

function HandlerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cartItems" element={<PokeCart />} />
    </Routes>
  );
}

export default HandlerRoutes;
