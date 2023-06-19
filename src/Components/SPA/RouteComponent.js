import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Orders from "./Orders";
import NewProducts from "./NewProducts";
import OldProducts from "./OldProducts";

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products">
          <Route index element={<NewProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="old" element={<OldProducts />} />
        </Route>
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
