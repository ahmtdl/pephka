import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
