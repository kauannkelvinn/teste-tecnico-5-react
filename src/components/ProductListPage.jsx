import React from "react";
import { Link } from "react-router-dom";

const produtosFake = [
  { productId: 1, nome: "Produto A", preco: 10 },
  { productId: 2, nome: "Produto B", preco: 20 },
  { productId: 3, nome: "Produto C", preco: 30 },
];

export default function ProductListPage() {
  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {produtosFake.map((produto) => (
          <div key={produto.productId} className="product-card">
            <h3>{produto.nome}</h3>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
            <Link to={`/produto/${produto.productId}`}>
              <button>Ver Produto</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
