import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import CartBar from "./components/CartBar";
import './App.css'

export default function App() {
  return (
    <>
      <CartBar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/produto/:id" element={<ProductDetailPage />} />
        <Route path="/carrinho" element={<CartPage />} />
      </Routes>
    </>
  );
}
