import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const produtosFake = [
  { productId: 1, nome: "Produto A", preco: 10 },
  { productId: 2, nome: "Produto B", preco: 20 },
  { productId: 3, nome: "Produto C", preco: 30 },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const produto = produtosFake.find((p) => p.productId === Number(id));
  const [quantidade, setQuantidade] = useState(1);

  if (!produto) return <p>Produto não encontrado</p>;

  const handleAddToCart = () => {
    addItem(produto, quantidade);
    alert(`${quantidade}x ${produto.nome} adicionados ao carrinho!`);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="product-card">
        <h1>{produto.nome}</h1>
        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
  
        <label>
          Quantidade:
          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            style={{ marginLeft: 10, width: 60 }}
          />
        </label>
        <br />
        <button onClick={handleAddToCart} style={{ marginTop: 10 }}>
          Adicionar ao Carrinho
        </button>
  
        <br />
        <br />
        <Link to="/">← Voltar à lista de produtos</Link>
      </div>
    </div>
  );  
}
