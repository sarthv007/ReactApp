import React, { Suspense, lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";

// import About from "./About";
// import Contact from "./Contact";
// import Products from "./Products";

import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Orders from "./Orders";
import NewProducts from "./NewProducts";
import OldProducts from "./OldProducts";
import UsersDetailsPage from "./UsersDetailsPage";
import Users from "./Users";
import UserList from "../../CRUDApp/UserList";
import NavbarComp from "../../CRUDApp/Navbar";
import AddUser from "../../CRUDApp/AddUser";
import EditUser from "../../CRUDApp/EditUser";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Products = lazy(() => import("./Products"));

function RouteComponent() {
  return (
    <div>
      <NavbarComp />
      {/* <Navbar />
      <Suspense fallback={"...loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<NewProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="old" element={<OldProducts />} />
          </Route>

          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":userId" element={<UsersDetailsPage />} />
          </Route>

          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense> */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-users" element={<AddUser />} />
        <Route path="/users/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
