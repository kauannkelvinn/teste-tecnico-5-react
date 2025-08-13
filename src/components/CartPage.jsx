import React, { useState } from 'react';

function Carrinho() {
  const [carrinho, setCarrinho] = useState([
    { id: 1, nome: 'Produto A', preco: 10.0, quantidade: 1 },
  ]);

  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'erro' ou 'sucesso'
  const [isEnviando, setIsEnviando] = useState(false);

  const handleQuantidadeChange = (id, novaQuantidade) => {
    setCarrinho((oldCarrinho) =>
      oldCarrinho.map((item) =>
        item.id === id
          ? { ...item, quantidade: Number(novaQuantidade) }
          : item
      )
    );
  };

  const subtotal = (item) => item.preco * item.quantidade;
  const total = carrinho.reduce((acc, item) => acc + subtotal(item), 0);

  const handleClienteChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleRemover = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const finalizarOrcamento = async () => {
    setMensagem('');
    setTipoMensagem('');

    if (carrinho.length === 0) {
      setMensagem('Carrinho vazio!');
      setTipoMensagem('erro');
      return;
    }

    if (!cliente.nome || !cliente.email || !cliente.telefone) {
      setMensagem('Preencha todos os dados do cliente');
      setTipoMensagem('erro');
      return;
    }

    setIsEnviando(true);

    const payload = {
      cliente,
      produtos: carrinho.filter(item => item.quantidade > 0),
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMensagem('Orçamento finalizado com sucesso!');
        setTipoMensagem('sucesso');
        setCarrinho([]);
        setCliente({ nome: '', email: '', telefone: '' });
      } else {
        setMensagem('Erro ao finalizar orçamento. Tente novamente.');
        setTipoMensagem('erro');
      }
    } catch {
      setMensagem('Erro na comunicação com o servidor.');
      setTipoMensagem('erro');
    } finally {
      setIsEnviando(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Carrinho</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Produto</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Preço</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Quantidade</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Subtotal</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carrinho.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{item.nome}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>R$ {item.preco.toFixed(2)}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                <input
                  type="number"
                  min="0"
                  value={item.quantidade}
                  onChange={(e) => handleQuantidadeChange(item.id, e.target.value)}
                  style={{ width: 60, padding: 4 }}
                  disabled={isEnviando}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>R$ {subtotal(item).toFixed(2)}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                <button
                  onClick={() => handleRemover(item.id)}
                  disabled={isEnviando}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: 20 }}>Total: R$ {total.toFixed(2)}</h3>

      <h3>Dados do cliente</h3>
      <label style={{ display: 'block', marginTop: 10 }}>
        Nome:
        <input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleClienteChange}
          disabled={isEnviando}
          style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </label>

      <label style={{ display: 'block', marginTop: 10 }}>
        Email:
        <input
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleClienteChange}
          disabled={isEnviando}
          style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </label>

      <label style={{ display: 'block', marginTop: 10 }}>
        Telefone (somente números):
        <input
          type="text"
          name="telefone"
          value={cliente.telefone}
          onChange={handleClienteChange}
          disabled={isEnviando}
          style={{ width: '100%', padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </label>

      <button
        onClick={finalizarOrcamento}
        disabled={isEnviando}
        style={{
          marginTop: 20,
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: 5,
          cursor: isEnviando ? 'not-allowed' : 'pointer',
        }}
      >
        {isEnviando ? 'Enviando...' : 'Finalizar Orçamento'}
      </button>

      {mensagem && (
        <p
          style={{
            marginTop: 15,
            color: tipoMensagem === 'sucesso' ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default Carrinho;
