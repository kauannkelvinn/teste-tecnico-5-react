import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartBar() {
  const { totalQuantity } = useCart();

  return (
    <div style={{
      background: "#333",
      color: "#fff",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
        Produtos
      </Link>
      <Link to="/carrinho" style={{ color: "#fff", textDecoration: "none" }}>
        Carrinho ({totalQuantity})
      </Link>
    </div>
  );
}
